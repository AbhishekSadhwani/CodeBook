import { useEffect, useState } from 'react'
import { EmptyDashboard } from './components/EmptyDashboard'
import { DashboardCard } from './components/DashboardCard'
import { useCustomTitle } from '../../hooks/useCustomTitle';
import { getUserOrders } from '../../Services/DataServices';
import { toast } from 'react-toastify';

export const DashboardPage = () => {
  // state variable to store the order list fetched using api request
  const [orders, setOrders] = useState([]);

  /*
  using useEffect to run the async function to get the data everytime the dashboard page is loaded
  using the getUserOrders function from DataServices for Api call
  */
  useEffect(() => {
    async function getOrders(){
      try{
        const data = await getUserOrders();
        setOrders(data); 
      }catch(error){
        toast.error(error.message,{position: "bottom-center",autoClose:3000})
      }
    } 
    getOrders();
  },[])

  // set custom title using the hook
  useCustomTitle("Dashboard");

  return (

    <main>
      <section className='my-10 text-center text-2xl text-slate-900 font-semibold underline underline-offset-8 dark:text-slate-100'>
        <h1>My Dashboard</h1>
      </section>
      <section>
        {/* traversing over order list */}
        {orders.length > 0 && orders.map(order => (
          <DashboardCard key={order.id} order={order} />
        ))}

        {!orders.length && <EmptyDashboard />}
      
      </section>
    </main>
  )
}
