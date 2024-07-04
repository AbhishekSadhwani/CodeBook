import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // fetching feature products from API
  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch("http://localhost:8000/featured_products");
      const data = await response.json();
      setProducts(data);
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
