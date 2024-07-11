// function to get all the products with or without query, depends if the user searches something or not
export async function getProducts(query){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${query ? query : ""}`);
    if(!response.ok){
        throw {message:response.statusText, status:response.status};
    }
    const data = await response.json();
    return data;
}

// function to get list of featured products for the home page
export async function getFeaturedProducts(){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        throw {message:response.statusText, status:response.status};
    }
    const data = await response.json();
    return data;
}

// function to fetch all details of a product using product id
export async function getProductDetails(id) {
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    if(!response.ok){
        throw {message:response.statusText, status:response.status};
    }
    const data = await response.json();
    return data;
}