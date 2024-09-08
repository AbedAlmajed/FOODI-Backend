import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Order = () => {
    const orders = [
        {
          orderDate: '12/22/2023',
          transactionId: 'pi_3OQ1KZC5f2f29337080CLNHc',
          price: 48,
          status: 'order pending'
        },
        {
          orderDate: '12/22/2023',
          transactionId: 'pi_3OQ0eeC5f2f29337006dGk',
          price: 28,
          status: 'order pending'
        },
        {
          orderDate: '12/22/2023',
          transactionId: 'pi_3OQ0eeC5f2f29337006dGk',
          price: 28,
          status: 'order pending'
        },
        {
          orderDate: '12/22/2023',
          transactionId: 'pi_3OQ0eeC5f2f29337006dGk',
          price: 28,
          status: 'order pending'
        },
        {
          orderDate: '12/22/2023',
          transactionId: 'pi_3OQ0eeC5f2f29337006dGk',
          price: 28,
          status: 'order pending'
        }
      ];
  return (
    <div className="container mx-auto p-6 mt-20">
        <Navbar/>
      <h1 className="text-3xl font-bold mb-6 text-center">Track Your All <span className='text-green'>Orders</span></h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Order Date</th>
              <th className="py-3 px-6 text-left">Transaction Id</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map((order, index) => (
              <tr key={order.transactionId} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left">{order.orderDate}</td>
                <td className="py-3 px-6 text-left">{order.transactionId}</td>
                <td className="py-3 px-6 text-left">${order.price}</td>
                <td className="py-3 px-6 text-left">
                  <span className="bg-green text-white py-1 px-3 rounded-full text-xs">
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  <button className="text-green hover:text-black">
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default Order;