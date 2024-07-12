import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../../context'

// Card to show products in card
export const CartCard = ({item}) => {
  // accessing removefromcart function to add the functionality to remove button
  const { removeFromCart } = useCart();
  return (
    <div className="flex my-10 border-b dark:border-gray-700 p-2 mb-5 dark:text-slate-100">
        <div className='w-32 mr-2'>
          <Link to={`products/${item.id}`}>
            <img className='rounded-md' src={item.poster} alt="name" />
          </Link>
        </div>
        <div className='grow text-left dark:text-slate-100'>
          <Link to={`/products/${item.id}`}>
            <p className='text-lg'>{item.name}</p>
          </Link>
          <button onClick={() => removeFromCart(item)} className='text-red-400'>Remove</button>
        </div>
        <p className='text-lg p-2'>${item.price}</p>
    </div>
  )
}
