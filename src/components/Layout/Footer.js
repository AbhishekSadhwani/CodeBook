import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl p-4 md:px-6 md:py-5  md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2030 <Link to="/" className="hover:underline">CodeBook</Link>. All Rights Reserved.</span>
        <div className="flex mt-4 space-x-6 sm:mt-0">
            <Link rel='noreferrer' target='_blank' to="https://www.instagram.com/abhisadhwani1304/" className="text-lg text-gray-500 hover:underline hover:text-black dark:text-gray-400 hover:dark:text-white">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link rel='noreferrer' target='_blank' to="https://x.com/abhi_0413" className="text-lg text-gray-500 hover:underline hover:text-black dark:text-gray-400 hover:dark:text-white">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link rel='noreferrer' target='_blank' to="https://github.com/sadhwaniabhi" className="text-lg text-gray-500 hover:underline hover:text-black dark:text-gray-400 hover:dark:text-white">
              <i className="bi bi-github"></i>
            </Link>
        </div>
      </div>
    </footer>

    
  )
}
