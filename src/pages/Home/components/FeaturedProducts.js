import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedProducts } from "../../../Services";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  // creating a products state to hold the products received from API call
  const [products, setProducts] = useState([]);

  // fetching feature products using the productservices function getFeaturedProducts for the API call
  useEffect(() => {
    async function fetchProducts(){
      try{
        const data = await getFeaturedProducts();
        setProducts(data);
      }catch(error){
        toast.error(error.message,{position: "bottom-center",autoClose:3000})
      }
    };
    fetchProducts();
  },[]);

  return (
    <section className="my-20">
      <h1 className="text-center text-2xl underline underline-offset-8 mb-5 font-semibold dark:text-slate-100">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
};
