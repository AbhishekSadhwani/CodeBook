export const FilterReducer = (state,action) => {
    const {type,payload} = action;

    switch(type){
        case "PRODUCT_LIST":
            return {productsList:payload.products}
        
        case "SORT_BY":
            return
        
        case "RATING":
            return
            
        case "BEST_SELLER_ONLY":
            return {...state, bestSellerOnly:payload.bestSellerOnly};
        
        case "IN_STOCK_ONLY":
            return {...state, inStockOnly:payload.inStockOnly};
        
        default:
            throw new Error("No case found");
    }
}