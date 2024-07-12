import { EmptyCart } from "./Components/EmptyCart"
import { CartList } from "./Components/CartList"
import { useCart } from "../../context"
import { useCustomTitle } from "../../hooks/useCustomTitle";

export const CartPage = () => {
  // accessing cartList from cartContext
  const { cartList } = useCart();

  // set custom title
  useCustomTitle(`Cart (${cartList.length})`);

  return (
    <main>
      {/* based on cartList length we render CartList or EmptyCart componenets */}
      {cartList.length ? <CartList /> : <EmptyCart />}
    </main>
  )
}
