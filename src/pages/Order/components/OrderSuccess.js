import { Link } from "react-router-dom";

// component to be rendered when order is successfull
export const OrderSuccess = ({data}) => {
    return (
        <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
            <div className='my-3'>
                <p className="bi bi-check-circle text-green-600 text-7xl mb-6"></p>
                <p>Thank you {data.user.name} for the order!</p>
                <p>Your Order ID: {data.id}</p>
            </div>
            <div className='my-5'>
                <p>Your order is confirmed.</p>
                <p>Please check your mail ({data.user.email}) for the eBook.</p>
            </div>
            <p className='my-5'>Payment ID: {data.payment_id}</p>
            <Link to="/products" type="button" className="inline-block px-5 py-2.5 mr-2 mb-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
        </section>
    )
}
