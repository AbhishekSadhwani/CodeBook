import { Link } from "react-router-dom";

export const OrderFail = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className='my-3'>
          <p className="bi bi-exclamation-circle text-red-600 text-7xl mb-6"></p>
          <p>Payment failed, Please try again!</p>
        </div>
        <div className='my-5'>
          <p>Your order is not confirmed.</p>
          <p>Connect codebook@example.com for support.</p>
        </div>
        <Link to="/cart" type="button" className="inline-block px-5 py-2.5 mr-2 mb-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Check Cart Again <i className="ml-2 bi bi-cart"></i></Link>
      </section>
  )
}
