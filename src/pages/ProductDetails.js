import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Rating } from '../components/Elements/Rating';
import { useCustomTitle } from "../hooks/useCustomTitle";

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`http://localhost:8000/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    },[id])

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
                            <button className='flex items-center text-white bg-blue-700 px-5 py-2 text-lg text-center rounded-lg hover:bg-blue-800'>
                                Add To Cart
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" className="ml-1 items-center bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>
                            </button>
                        </p>
                        <p className="text-lg">{product.long_description}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
