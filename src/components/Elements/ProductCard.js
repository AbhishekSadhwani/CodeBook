import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from './Rating';
import { useCart } from '../../context';
import backupimage from '../../assets/hero_image.png';

export const ProductCard = ({product}) => {
    // accessing cartList, addToCart and removeFromCart functions from cartContext
    const { cartList, addToCart, removeFromCart } = useCart();

    // creating a state variable to keep track if the product is in cart or not
    const [inCart, setInCart] = useState(false);

    /*
    using useEffect to keep checking if the product passed is in cart or not,
    since cartList and id are passed as depedency the useEffect will run every time there is change in them
    */
    useEffect(() => {
        const productInCart = cartList.find(item => item.id === product.id);

        if(productInCart){
            setInCart(true);
        }else{
            setInCart(false);
        }
    },[cartList, product.id]);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/products/${product.id}`} className='block relative'>
                {product.best_seller && <span className='absolute top-4 left-2 text-white bg-orange-600 bg-opacity-90 px-2 rounded'>Best Seller</span>}
                <img className="rounded-t-lg w-full h-64" src={product.poster ? product.poster : backupimage} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/products/${product.id}`}>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.overview}</p>
                <div className="flex items-center my-2">
                    <Rating rating = {product.rating} />
                </div>
                <p className='flex items-center justify-between mt-3'>
                    <span className='text-2xl dark:text-gray-100'>${product.price}</span>
                    {/* if product not in cart showing the add to cart button */}
                    {!inCart && <button onClick={() => addToCart(product)} className={`flex items-center text-white bg-blue-700 px-3 py-2 text-sm text-center ${product.in_stock ? "" : "cursor-not-allowed"} rounded-lg hover:bg-blue-800`} disabled={product.in_stock ? "" : "disabled"}>
                                    Add To Cart
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="ml-1 items-center bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                    </svg>
                                </button>
                    }
                    {/* if in cart showing the remove button */}
                    {inCart && <button onClick={() => removeFromCart(product)} className='flex items-center text-white bg-red-600 px-3 py-2 text-sm text-center rounded-lg hover:bg-red-800'>
                                    Remove Item
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1 bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                    </svg>
                                </button> 
                    }
                </p>
            </div>
        </div>
    )
}
