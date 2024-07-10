import React, { useEffect, useState } from 'react'
import { EmptyDashboard } from './components/EmptyDashboard'
import { DashboardCard } from './components/DashboardCard'
import { useCustomTitle } from '../../hooks/useCustomTitle';

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  // accessing the orders for the loggedin user using the token
  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    console.log(cbid);
    const requestedData = {
      method: "GET",
      headers : {"Content-Type":"application.json", Authorization:`Bearer ${token}`}
    };

    async function getOrders() {
      const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}`, requestedData);
      const data = await response.json();
      setOrders(data); 
      console.log(data);
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
