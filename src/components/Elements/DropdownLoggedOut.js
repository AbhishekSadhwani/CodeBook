import { Link } from "react-router-dom"

export const DropdownLoggedOut = ({showDropdown}) => {
  return (
    <div id="dropdown" className={`${showDropdown ? "" : "hidden" } absolute top-11 right-0 z-1 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`}>
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
            <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
        </li>
        <li>
            <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
        </li>
        <li>
            <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
        </li>
        </ul>
    </div>
  )
}
