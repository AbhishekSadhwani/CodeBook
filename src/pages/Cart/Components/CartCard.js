import React from 'react'
import { useCart } from '../../../context'

export const CartCard = ({item}) => {
  const { removeFromCart } = useCart();
  return (
    <div className="flex my-10 border-b dark:border-gray-700 p-2 mb-5 dark:text-slate-100">
        <div className='w-32 mr-2'>
            <img className='rounded-md' src={item.poster} alt="name" />
        </div>
        <div className='grow text-left dark:text-slate-100'>
            <p className='text-lg'>{item.name}</p>
            <button onClick={() => removeFromCart(item)} className='text-red-400'>Remove</button>
        </div>
        <p className='text-lg p-2'>${item.price}</p>
        
    </div>
  )
}
