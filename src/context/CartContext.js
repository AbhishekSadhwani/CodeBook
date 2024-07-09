import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../Reducer";

const initialCartState = {
    cartList: [],
    total: 0
};

const CartContext = createContext(initialCartState);

export const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(CartReducer, initialCartState);

    const addToCart = (product) => {
        const updatedCartList = state.cartList.concat(product);
        const cartTotal = state.total + product.price;
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products : updatedCartList,
                total: cartTotal
            }
        });
    }; 

    const removeFromCart = (product) => {
        const updatedCartList = state.cartList.filter(item => item.id !== product.id);
        const cartTotal = state.total - product.price;
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatedCartList,
                total: cartTotal
            }
        });
    };

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart
    }

    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
