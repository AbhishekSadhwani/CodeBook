import { useState } from "react";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";


export const CartList = () => {
    const { cartList, total } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);

    return (
        <>
            <section>
                <p className="my-10 text-2xl text-center font-semibold underline underline-offset-8 dark:text-slate-100">
                    My Cart ({cartList.length})
                </p>
            </section>
            <section className="max-w-4xl mx-auto">
                {cartList.map(item => (
                    <CartCard key={item.id} item = {item} />
                ))} 
            </section>
            <section className="max-w-4xl mx-auto">
                <div className=" flex flex-col text-lg p-2 border-b border-gray-700 dark:text-slate-100">
                    <p className="flex justify-between my-2">
                        <span className="font-semibold">Total Amount:</span>
                        <span>${total}</span>
                    </p>
                </div>
                <div className="text-right my-5">
                    <button onClick={() => setShowCheckout(true)} type="button" className="text-center font-medium px-7 py-2.5 mr-2 mb-2 rounded-lg text-white bg-blue-600 hover:bg-blue-800">
                        PLACE ORDER 
                        <i className="ml-2 bi bi-arrow-right"></i>
                    </button>
                </div>
            </section>
            {showCheckout && <Checkout setShowCheckout={setShowCheckout} />}
        </>
    )
}
