import React, { useEffect, useState } from 'react'
import { EmptyDashboard } from './components/EmptyDashboard'
import { DashboardCard } from './components/DashboardCard'
import { useCustomTitle } from '../../hooks/useCustomTitle';
import { getUserOrders } from '../../Services/DataServices';
import { toast } from 'react-toastify';

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

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
        {orders.length > 0 && orders.map(order => (
          <DashboardCard key={order.id} order={order} />
        ))}

        {!orders.length && <EmptyDashboard />}
      
      </section>
    </main>
  )
}
