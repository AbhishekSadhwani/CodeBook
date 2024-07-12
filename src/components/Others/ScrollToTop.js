import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// component to scroll the page to top whenever path is changed it will be passed in base index.js file so it is applied on whole application
export const ScrollToTop = () => {
    // access the current pathname using useLocatio hook
    const {pathname} = useLocation();

    useEffect(() => {
        // using scrollTo function of window to scroll back to top
        window.scrollTo(0,0);
    },[pathname])
  
    return null;
}
