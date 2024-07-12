import { useFilter } from "../../../context";

// filter component for products page
export const FilterBar = ({setShow}) => {
  // accessing the state and dispatch from filter context to set function in different filters and set state values
  const { state, dispatch } = useFilter();

  return (
    <section>
      {/* drawer component */}
      <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-72 h-screen p-5 overflow-y-auto transition-transhtmlform bg-white dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Filters</h5>
        <button onClick={() => setShow(false)} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close menu</span>
        </button>
        <div className="border-b border-gray-300 pb-3"></div>
        <div className="py-4 overflow-y-auto">
          <ul className="text-slate-700 dark:text-slate-100">
            {/* sort by */}
            <li className="mt-1 mb-5">
                <p className="font-semibold my-1">Sort by</p>
                <div className="flex items-center my-1">
                  <input onChange={() => dispatch({type:"SORT_BY",payload:{sort: "LowtoHigh"}})} checked={state.sort === "LowtoHigh" || false} id="price-radio-1" type="radio" value="" name="price-sort" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="price-radio-1" className="ml-2 text-sm text-gray-900 dark:text-gray-300">Price - Low to High</label>
                </div>
                <div className="flex items-center my-1 font-md">
                  <input onChange={() => dispatch({type:"SORT_BY",payload:{sort: "HightoLow"}})} checked={state.sort === "HightoLow" || false} id="price-radio-2" value="" name="price-sort" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="price-radio-2" className="ml-2 text-sm text-gray-900 dark:text-gray-300">Price - High to Low</label>
                </div>
            </li>
            {/* rating */}
            <li className="mt-1 mb-5">
                <p className="font-semibold my-1">Rating</p>
                <div className="flex items-center my-1">
                  <input onChange={() => dispatch({type:"RATING",payload:{rating: "4andABOVE"}})} checked={state.rating === "4andABOVE" || false} id="rating-1" type="radio" value="" name="rating" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="rating-1" className="ml-2 text-sm text-gray-900 dark:text-gray-300">4 Stars & Above</label>
                </div>
                <div className="flex items-center my-1 font-md">
                  <input onChange={() => dispatch({type:"RATING",payload:{rating: "3andABOVE"}})} checked={state.rating === "3andABOVE" || false} id="rating-2" value="" name="rating" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="rating-2" className="ml-2 text-sm text-gray-900 dark:text-gray-300">3 Stars & Above</label>
                </div>
                <div className="flex items-center my-1 font-md">
                  <input onChange={() => dispatch({type:"RATING",payload:{rating: "2andABOVE"}})} checked={state.rating === "2andABOVE" || false} id="rating-3" value="" name="rating" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="rating-3" className="ml-2 text-sm text-gray-900 dark:text-gray-300">2 Stars & Above</label>
                </div>
                <div className="flex items-center my-1 font-md">
                  <input onChange={() => dispatch({type:"RATING",payload:{rating: "1andABOVE"}})} checked={state.rating === "1andABOVE" || false} id="rating-4" value="" name="rating" type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="rating-4" className="ml-2 text-sm text-gray-900 dark:text-gray-300">1 Stars & Above</label>
                </div>
            </li>
            {/* best_seller and in_stock */}
            <li className="mt-1 mb-5">
                <p className="font-semibold my-1">Other Filters</p>
                <div className="flex items-center my-1">
                  <input onChange={() => dispatch({type:"BEST_SELLER_ONLY",payload:{bestSellerOnly: !state.bestSellerOnly}})} checked={state.bestSellerOnly || false} id="other-filter-1" type="checkbox" value="" name="other-filters" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="other-filter-1" className="ml-2 text-sm text-gray-900 dark:text-gray-300">Best Seller Only</label>
                </div>
                <div className="flex items-center my-1 font-md">
                  <input onChange={() => dispatch({type:"IN_STOCK_ONLY",payload:{inStockOnly: !state.inStockOnly}})} checked={state.inStockOnly || false} id="other-filter-2" value="" name="other-filters" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="other-filter-2" className="ml-2 text-sm text-gray-900 dark:text-gray-300">INSTOCK Only</label>
                </div>
            </li>
            {/* clear filters */}
            <li className="mt-1 ml-1">
              <button onClick={() => dispatch({type:"CLEAR"})} className="text-sm text-slate-900 border border-gray-300 px-10 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 dark:focus:ring-gray-700 dark:text-slate-200 dark:border-gray-600 dark:hover:bg-gray-700">Clear Filter</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
