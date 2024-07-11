import { Link } from "react-router-dom";

export const DashboardCard = ({order}) => {
  return (
    <section className='max-w-4xl mx-auto border dark:border-gray-700 p-4 my-10'>
        <div className="flex justify-between dark:text-slate-100 font-semibold text-sm">
            <p>Order Id:{order.id}</p>
            <p>Total: ${order.amount}</p>
        </div>
        {/* traverse over the carlist in the order */}
        {order.cartList.map(item => (
            <div key={item.id} className="flex my-7 dark:text-slate-100">
                <div className='w-32 mr-2'>
                    <Link to={`/products/${item.id}`}>
                        <img className='rounded-md' src={item.poster} alt={item.name} />
                    </Link>
                </div>
                <div className='grow text-left dark:text-slate-100'>
                    <Link to={`/products/${item.id}`}>
                        <p className='text-lg mb-2'>{item.name}</p>
                    </Link>
                    <p className='text-lg'>${item.price}</p>
                </div>
            </div>
        ))}
        
    </section>
  )
}
