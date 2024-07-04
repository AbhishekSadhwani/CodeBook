import { Link } from 'react-router-dom';
import heroImage from '../../../assets/hero_image.png';

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center">
      <div className="text-left my-5">
          <h1 className="text-gray-900 dark:text-slate-100 text-5xl font-bold">The Ultimate eBook Store</h1>
          <p className="text-2xl font-normal text-black dark:text-gray-300 my-7 px-1">CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
          <Link to="/products" className="inline-flex justify-center items-center py-2.5 px-5 mr-2 mb-2 text-base text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Explore eBooks
          </Link>
      </div>
      <div className='my-5 lg:max-w-xl'>
        <img className='max-h-full rounded-lg' src={heroImage} alt="hero" />
      </div>
    </section>
  )
}
