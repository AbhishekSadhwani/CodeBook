import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";

export const Checkout = ({setShowCheckout}) => {
    // accessing the value of total from context
    const { cartList, total, clearCart } = useCart();

    const navigate = useNavigate();

    // creating a state for user variable
    const [user, setUser] = useState({});
    
    // accessing the token and id of the loggedIn user from sessionStorage
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    // accessing the loggedIn user details by sending a fetch request to API so created a async function
    useEffect(() => {
        async function getUser(){
            const response = await fetch(`http://localhost:8000/600/users/${cbid}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await response.json();
            setUser(data);
        }
        getUser();
    },[])

    /* 
    handle the order when the form is submitted and 
    because we need to send the details to get save in the orders we create a async function and send a API POST request
    */
    async function handleOrder(event){
        event.preventDefault();

        try{
            // the data which we send with the fetch request
            const requestData = {
                method: "POST",
                headers: {"Content-Type":"application/json", Authorization:`Bearer ${token}`},
                body:JSON.stringify({
                    cartList: cartList,
                    amount: total,
                    user:{
                        name: user.name,
                        email: user.email,
                        id: user.id
                    },
                    payment_id: `xyz_${Math.floor(Math.random()*100000000)}`
                })
            };

            const response = await fetch("http://localhost:8000/660/orders", requestData);
            const data = await response.json();
            // function to clearCart when order is successfull
            clearCart();
            // navigate to order summary page
            navigate("/order-summary", {state:{data:data,status:true}});
        
        } catch(error){
            navigate("/order-summary", {state:{status:false}});
        }
    } 

    return (
        <section>
            <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50">
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-modal md:h-full md:inset-0">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                            <button onClick={() => setShowCheckout(false)} type="button" className="absolute top-3 right-2.5 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="py-6 px-6 lg:px-8">
                                {/* Modal header */}
                                <h3 className="text-xl text-gray-900 dark:text-white mb-4">
                                    <i className="mr-2 bi bi-credit-card"></i>
                                    CARD PAYMENT
                                </h3>
                                {/* Modal body */}
                                <form onSubmit={handleOrder} className="space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name:</label>
                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={user.name || "Undefined"} placeholder="Your Name.." disabled required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={user.email || "xyz@backup.com"} placeholder="xyz@example.com" disabled required />
                                    </div>
                                    <div>
                                        <label htmlFor="card-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Number:</label>
                                        <input type="number" name="card number" id="card-number" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiry Date:</label>
                                        <input type="number" name="month" id="month" placeholder="" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-20 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                        <input type="number" name="year" id="year" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-20 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />

                                    </div>
                                    <div>
                                        <label htmlFor="security-code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Security Code:</label>
                                        <input type="number" name="security code" id="security-code" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    
                                    <div className="text-center">
                                        <p className="font-semibold text-lime-500 text-2xl">${total}</p>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <i className="mr-3 bi bi-lock-fill"></i>
                                        PAY NOW
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>         
    )
}
