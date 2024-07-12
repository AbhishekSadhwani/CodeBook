import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../Reducer";

// inital cart state
const initialCartState = {
    cartList: [],
    total: 0
};

// creating the context using the createContext method from react
const CartContext = createContext(initialCartState);

// creating the provider for cartContext
export const CartProvider = ({children}) => {
    // getting access to state and dispatch using reducer
    const [state,dispatch] = useReducer(CartReducer, initialCartState);

    // reducer function to add product to cart
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

    // reducer function to remove product from cart
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

    // function to clear cart when order is successfull
    const clearCart = () => {
        dispatch({
            type:"CLEAR_CART",
            payload:{
                products:[],
                total:0
            }
        })
    }


    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
};

// creating a function useCart so cartContext can be accessed from all components using this function
export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
