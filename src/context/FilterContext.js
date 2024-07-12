import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../Reducer";

// initial filter state
const initialFilterState = {
    productsList :[],
    bestSellerOnly: false,
    inStockOnly : false,
    sort: null,
    rating:null
};

// creating filter context using createContext method of react
const FilterContext = createContext(initialFilterState);

// creating provider for FilterContext
export const FilterProvider = ({children}) => {
    // accessing state and dispatch using the Reducer
    const [state,dispatch] = useReducer(FilterReducer,initialFilterState);

    // reducer function to fetch the initial products list
    const initialProductsList = (products) => {
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        });
    };

    
    /* 
    function to filter bestseller products from all products
    if state.best_seller is false then products will be returned without filter
    */
    const isbestSeller = (products) => {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true)  : products;
    };

    /* 
    function to filter instock products from all products
    if state.in_stock is false then products will be returned without filter
    */
    const isInStock = (products) => {
        return state.inStockOnly ? products.filter(product => product.in_stock === true) : products;
    };

    /* 
    function to filter products based on different rating values
    if the value of state.rating is null then all products will be returned without filter
    */
    const Rating = (products) => {
        if(state.rating === "4andABOVE"){
            return products.filter(product => product.rating >= 4);
        }
        if(state.rating === "3andABOVE"){
            return products.filter(product => product.rating >= 3);
        }
        if(state.rating === "2andABOVE"){
            return products.filter(product => product.rating >= 2);
        }
        if(state.rating === "1andABOVE"){
            return products.filter(product => product.rating >= 1);
        }
        return products;
    };

    /* 
    function to sort products based on price...low to high or high to low
    if value of state.sort is null products will be returned as it is without sorting
    */
    const Sort = (products) => {
        if(state.sort === "LowtoHigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price));
        }
        if(state.sort === "HightoLow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price));
        }
        return products;    
    };

    // applying all the function on the state product list so to get the desired list of products
    const filteredProductsList = Sort(Rating(isInStock(isbestSeller(state.productsList))));
    
    const value = {
        state,
        dispatch,
        productsList: filteredProductsList,
        initialProductsList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    ) 

}

// created a useFilter function so filtercontext can be accessed in all components with it
export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}

