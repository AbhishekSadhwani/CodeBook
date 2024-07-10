import { Route, Routes } from "react-router-dom"
import { HomePage, Login, Register, PageNotFound, ProductsList, ProductDetails, CartPage, OrderPage, DashboardPage } from '../pages/index';

import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/login" element= { <Login /> } />
      <Route path="/register" element={ <Register />} />
      <Route path="/products" element = { <ProductsList />} />
      <Route path="/products/:id" element = { <ProductDetails />} />
      <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes> } />
      <Route path="/order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes> } />
      <Route path="/dashboard" element={ <ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
      <Route path="*" element={ <PageNotFound />} />
    </Routes>
  )
}
