import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { FilterBar } from "./components/FilterBar";
import { ProductCard } from "../../components";


import { useFilter } from "../../context/FilterContext";
import { useCustomTitle } from "../../hooks/useCustomTitle";
import { getProducts } from "../../Services";



export const ProductsList = () => {
  // accessing productlist state and reducer function
  const { productsList ,initialProductsList } = useFilter();

  // set custom title using hook
  useCustomTitle("Explore eBook Collection");

  // state to toggle filter component
  const [show, setShow] = useState(false);
  
  //accessing search queries
  const [ searchParams ] = useSearchParams();
  const query = searchParams.get("q") ;
  
  // fetching products using the getProducts function from productsServices for API call
  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getProducts(query);
        initialProductsList(data);
      }catch(error){
        toast.error(error.message,{position: "bottom-center",autoClose:3000});
      }
    };
    fetchProducts();
  },[query]) // eslint-disable-line

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="items-center text-black text-2xl font-bold dark:text-white mb-5">All eBooks ({productsList.length})</span>
          <span>
            <button onClick={() => setShow(!show)} className="text-xl font-bold text-center p-2 rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white  dark:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
              </svg>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {/* iterating over product array and rendering productCards */}
          {productsList && productsList.map(product => (
            <ProductCard key={product.id} product = {product} />
          ))}
        </div>
      </section>

      {show && <FilterBar setShow={setShow} />}
    </main>
  )
}
