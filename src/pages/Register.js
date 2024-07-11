import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCustomTitle } from "../hooks/useCustomTitle"
import { register } from "../Services";

export const Register = () => {
  const navigate = useNavigate();
  // setting custom title
  useCustomTitle("Register");

  // submitting register form
  async function handleRegister(event){
    event.preventDefault();
    try{
      const userRegisterData = {
        name:event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      };

      const data = await register(userRegisterData);
      data.accessToken ? navigate("/") : toast.error(data);
    }catch(error){
      toast.error(error.message,{position: "bottom-center",autoClose:3000})
    }
  };


  return (
    <main>
      <section>
        <h1 className="text-center m-10 text-2xl text-black underline underline-offset-8 font-semibold dark:text-white" >Register</h1>
        <form onSubmit={handleRegister} className="mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abhishek Sadhwani" autoComplete="off" required />
          </div>
          <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" autoComplete="off" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>    
        </form>
      </section>
    </main>
  )
}
