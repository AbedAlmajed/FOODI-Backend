// pages/Customers.js
import React from 'react';
import Sidebar from "./Sidebar"
function Customers() {
  return (
   <>
   <Sidebar/>
   <div>
      <h1 className="text-3xl font-bold mb-4">Customers</h1>
      <p>Here you can manage your customers.</p>
    </div>
   </>
  );
}

export default Customers;
