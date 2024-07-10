import { useLocation } from 'react-router-dom';
import { OrderFail } from './components/OrderFail';
import { OrderSuccess } from './components/OrderSuccess';

export const OrderPage = () => {
  const { state } = useLocation();
  return (
    <main>
      
      {
        /* checking the state for order status if it's true then we will render 
        ordersuccess components otherwise orderfail component */
      }

      {state.status ?  <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  )
}
