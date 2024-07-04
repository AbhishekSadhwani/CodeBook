import { Link } from 'react-router-dom';
import { Rating } from './Rating';
import backupimage from '../../assets/hero_image.png';

export const ProductCard = ({product}) => {
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
                    <button className='flex items-center text-white bg-blue-700 px-3 py-2 text-sm text-center rounded-lg'>
                        Add to Cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="ml-1 items-center bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                    </button>
                </p>
            </div>
        </div>

    )
    }
