import { Link } from "react-router-dom"
import pagenotfoundimg from '../assets/pagenotfound.png';

export const PageNotFound = () => {
  return (
    <main>
      <section>
        <div className="flex flex-col justify-center">
          <div className=" flex flex-col items-center my-7">
            <p className="text-7xl m-3 font-bold p-4 text-gray-700 dark:text-white">404, Oops!</p>
            <div className="max-w-sm sm:max-w-lg my-5">
              <img className="rounded" src={pagenotfoundimg} alt="404 page not found" />
            </div>
          </div>
          <div className="self-center m-10">
            <Link to={"/"}>
              <button className="text-white text-2xl py-3 px-12 rounded-md bg-gray-800 dark:bg-gradient-to-br from-blue-500 to-blue-800 hover:bg-gradient-to-bl">Back To Home</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
