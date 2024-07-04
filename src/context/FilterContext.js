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
    }

    const Sort = (products) => {
        if(state.sort === "LowtoHigh"){
            return products.sort((a,b) => Number(a.price) - Number(b.price));
        }
        if(state.sort === "HightoLow"){
            return products.sort((a,b) => Number(b.price) - Number(a.price));
        }
        return products;    
    }

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

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}

