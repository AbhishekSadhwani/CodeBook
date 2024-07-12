// reducer component to be used in context

export const FilterReducer = (state,action) => {
    const {type,payload} = action;

    // defining different type of reducer function to be called, and handling them using switch
    switch(type){
        case "PRODUCT_LIST":
            return {productsList:payload.products}
        
        case "SORT_BY":
            return {...state, sort: payload.sort};
        
        case "RATING":
            return {...state, rating: payload.rating};
            
        case "BEST_SELLER_ONLY":
            return {...state, bestSellerOnly:payload.bestSellerOnly};
        
        case "IN_STOCK_ONLY":
            return {...state, inStockOnly:payload.inStockOnly};
        
        case "CLEAR":
            return {
                ...state,
                bestSellerOnly: false,
                inStockOnly : false,
                sort: null,
                rating:null
            };

        default:
            throw new Error("No case found");
    }
}