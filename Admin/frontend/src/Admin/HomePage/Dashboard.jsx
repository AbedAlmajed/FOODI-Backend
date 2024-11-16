
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';
// import { Users, Menu, ShoppingBag } from 'lucide-react';
// import Sidebar from './Sidebar'; // Import Sidebar component
// import  { useState, useEffect } from 'react';
// import axios from 'axios';

// const DashboardCard = ({ title, value, icon, subtext, color }) => (
//   <div className={`p-4 rounded-lg ${color}`}>
//     <div className="flex justify-between items-center">
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//         <p className="text-sm">{subtext}</p>
//       </div>
//       <div className="text-3xl">{icon}</div>
//     </div>
//   </div>
// );

// const RestaurantDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
//   const [customFoods, setCustomFoods] = useState([]);
//   const [error, setError] = useState(null);
//   const [menuItem, setMenuItem] = useState([]);

//   useEffect(() => {
//     fetchMenuItem();
//   }, []);


//   useEffect(() => {
//     fetchCustomFoods();
//   }, []);
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);


 
//   const fetchMenuItem = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/food-soon`);
//       setMenuItem(response.data.items);
//     } catch (error) {
//       console.error('Error fetching menu items:', error);
//       Swal.fire('Error', 'Failed to fetch menu items', 'error');
//     }
//   };


//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/users');
//       setUsers(response.data.filter((e)=>e.isActive===true));
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchCustomFoods = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/custom-foods');
//       if (response.status !== 200) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       if (!response.data || !Array.isArray(response.data)) {
//         throw new Error('Invalid data format received');
//       }
//       setCustomFoods(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching custom foods:', error);
//       setCustomFoods([]);
//       setError(error.message || 'An error occurred while fetching custom foods');
//     }
//   };

//   const fetchMenuItems = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/menu-items`);
//       setMenuItems(response.data.items);
//     } catch (error) {
//       console.error('Error fetching menu items:', error);
//     }
//   };

//   const cardData = [
//     { title: 'Custom Food', value: `${customFoods.length}`, color: 'bg-green', icon: <ShoppingBag /> },
//     { title: 'All Users', value: `${users.length}`,  color: 'bg-[#059212]', icon: <Users /> },
//     { title: 'Menu Items', value: `${menuItems.length}`, color: 'bg-green', icon: <Menu /> },
//     { title: 'Food Soon', value: `${menuItem.length}`,  color: 'bg-[#059212]', icon: <ShoppingBag /> },
//   ];

//   const barChartData = [
//     { name: 'soup', revenue: 44 },
//     { name: 'salad', revenue: 62.7 },
//   ];

//   const pieChartData = [
//     { name: 'soup', value: 45 },
//     { name: 'salad', value: 55 },
//   ];

//   const COLORS = ['#059212', '#00FF00'];

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       <Sidebar /> {/* Include Sidebar */}
//       <div className="flex-grow md:ml-20 p-6">
//         <h1 className="text-2xl font-bold mb-6">Hi, <span className='text-green'>Abedalmajeed Alajarmah</span></h1>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-white">
//           {cardData.map((card, index) => (
//             <DashboardCard key={index} {...card} />
//           ))}
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4 text-green">Revenue by Item</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={barChartData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="revenue" fill="#059212" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4 text-green">Sales Distribution</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={pieChartData}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {pieChartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//             <div className="flex justify-center mt-4">
//               {pieChartData.map((entry, index) => (
//                 <div key={`legend-${index}`} className="flex items-center mx-2">
//                   <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
//                   <span>{entry.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantDashboard;







































import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Menu, ShoppingBag } from 'lucide-react';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardCard = ({ title, value, icon, subtext, color }) => (
  <div className={`p-4 rounded-lg ${color}`}>
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm">{subtext}</p>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
  </div>
);

const RestaurantDashboard = () => {
  const [users, setUsers] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [customFoods, setCustomFoods] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchMenuItem();
    fetchCustomFoods();
    fetchUsers();
    fetchMenuItems();
    fetchPayments();
    fetchDrivers();

  }, []);




  const fetchDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/drivers');
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
  
  const fetchMenuItem = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/food-soon`);
      setMenuItem(response.data.items);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/payments');
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data.filter((e) => e.isActive === true));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchCustomFoods = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/custom-foods');
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setCustomFoods(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching custom foods:', error);
      setCustomFoods([]);
      setError(error.message);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/menu-items`);
      setMenuItems(response.data.items);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const cardData = [
    { title: 'Custom Food', value: `${customFoods.length}`, color: 'bg-green', icon: <ShoppingBag /> },
    { title: 'All Users', value: `${users.length}`, color: 'bg-[#059212]', icon: <Users /> },
    { title: 'All Drivers', value: `${drivers.length}`, color: 'bg-green', icon: <Menu /> },
    { title: 'Food Soon', value: `${menuItem.length}`, color: 'bg-[#059212]', icon: <ShoppingBag /> },
  ];

  // Prepare revenue data for bar chart
  const revenueData = payments.map(payment => ({
    date: new Date(payment.createdAt).toLocaleDateString(),
    sales: payment.orderSummary?.totalPrice || 0
  }));

  // Prepare address data for pie chart
  const addressData = payments.reduce((acc, payment) => {
    const city = payment.deliveryInfo?.city || 'Unknown';
    const existing = acc.find(item => item.name === city);
    if (existing) {
      existing.value++;
    } else {
      acc.push({ name: city, value: 1 });
    }
    return acc;
  }, []);

  const COLORS = ['#059212', '#00FF00', '#32CD32', '#90EE90', '#98FB98'];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow md:ml-20 p-6">
        <h1 className="text-2xl font-bold mb-6">Hi, <span className='text-green'>Abedalmajeed Alajarmah</span></h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-white">
          {cardData.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-green">Total Sales by Date</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                <Bar dataKey="sales" fill="#059212" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-green">Delivery Addresses by City</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={addressData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {addressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;