import { Navigate } from "react-router-dom";

/*
protcted route component created to make a route protected which means user will be 
required to login before they can visit this page
*/
export const ProtectedRoutes = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    return (
        token ? children : <Navigate to="/Login" />
    )
}
