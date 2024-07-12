import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { getUser, logout } from "../../Services";

export const DropdownLoggedIn = ({showDropdown}) => {
    const [user,setUser] = useState({});

    // handling logging out using the logout function from Services
    const handleLogout = () => {
        logout();
    };

    // fetching user details to show user email in dropdown
    useEffect(() => {
        async function fetchUser(){
            try{
                const data = await getUser();
            setUser(data);
            }catch(error){
                toast.error(error.message,{position: "bottom-center",autoClose:3000})
            }
        }
        fetchUser();
    },[]);

    return (
        <div id="dropdownInformation" className={`${showDropdown ? "" : "hidden" } absolute top-11 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                <li>
                    <Link to="/products" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
            </ul>
            <div className="py-2">
                <Link onClick={handleLogout} to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</Link>
            </div>
        </div>
    )
}
