import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Rating } from '../components/Elements/Rating';
import { useCustomTitle } from "../hooks/useCustomTitle";
import { useCart } from "../context";
import { getProductDetails } from "../Services";
import { toast } from "react-toastify";

export const ProductDetails = () => {
    // catching the id passed in the url to fetch details of the product using the id
    const { id } = useParams();
    // creating a state list for holding the products
    const [product, setProduct] = useState({});
    const { cartList, addToCart, removeFromCart } = useCart();

    // using a state variable to monitor if product is in cart or not
    const [inCart, setInCart] = useState();

    // fetching productDetails using getproductDetails function from ProductServices for API call
    useEffect(() => {
        async function fetchProduct() {
            try{
                const data = await getProductDetails(id);
                setProduct(data);
            }catch(error){
                toast.error(error.message,{position: "bottom-center",autoClose:3000});
            }           
        }
        fetchProduct();
    },[id])

    // checking if product is in cart
    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);
        if(productInCart){
            setInCart(true);
        }else{
            setInCart(false);
        }
    },[cartList, product.id]);

    // setting custom title
    useCustomTitle(product.name);

    return (
        <main>
            <section className="text-center text-slate-900 dark:text-slate-200 my-10">
                <h1 className="text-4xl font-semibold mb-5">{product.name}</h1>
                <p className="text-lg mb-5">{product.overview}</p>
                <div className="flex flex-wrap justify-around">
                    <div className="image max-w-xl my-3">
                        <img className="rounded" src={product.poster} alt={product.name} />
                    </div>
                    <div className="text-left max-w-xl my-3">
                        <p className="font-bold text-3xl dark:text-slate-200">$<span className="ml-1">{product.price}</span></p>
                        <p className="my-3">
                            <Rating rating={product.rating}/>
                        </p>
                        <p className="my-4">
                            {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
                            {product.in_stock ? 
                                (<span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>) 
                                : 
                                (<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)}
                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
                        </p>
                        <p className="my-3">
                            { !inCart && <button onClick={() => addToCart(product)} className={`flex items-center text-white bg-blue-700 px-5 py-2 text-lg text-center rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>
                                            Add To Cart
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" className="ml-1 items-center bi bi-plus-lg" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                            </svg>
                                         </button> 
                            }
                            { inCart && <button onClick={() => removeFromCart(product)} className='flex items-center text-white bg-red-600 px-5 py-2 text-lg text-center rounded-lg hover:bg-red-800'>
                                                Remove Item
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1 bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                                </svg>
                                        </button> 
                            }
                        </p>
                        <p className="text-lg">{product.long_description}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
