import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../Reducer";

const initialFilterState = {
    productsList :[],
    bestSellerOnly: false,
    inStockOnly : false,
    sort: null,
    rating:null
};


const FilterContext = createContext(initialFilterState);

export const FilterProvider = ({children}) => {
    const [state,dispatch] = useReducer(FilterReducer,initialFilterState);

    const initialProductsList = (products) => {
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        });
    };

    const isbestSeller = (products) => {
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true)  : products;
    };

    const isInStock = (products) => {
        return state.inStockOnly ? products.filter(product => product.in_stock === true) : products;
    };

    const filteredProductsList = isInStock(isbestSeller(state.productsList));
    
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

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}

