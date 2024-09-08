
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Users, Menu, ShoppingBag } from 'lucide-react';
import Sidebar from './Sidebar'; // Import Sidebar component

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
  const cardData = [
    { title: 'Revenue', value: '$438.7', subtext: 'Jan 1st - Feb 1st', color: 'bg-green', icon: '$' },
    { title: 'Users', value: '12', subtext: '↑ 400 (22%)', color: 'bg-[#059212]', icon: <Users /> },
    { title: 'Menu Items', value: '63', subtext: '↑ 400 (22%)', color: 'bg-green', icon: <Menu /> },
    { title: 'Orders', value: '8', subtext: '↓ 90 (14%)', color: 'bg-[#059212]', icon: <ShoppingBag /> },
  ];

  const barChartData = [
    { name: 'soup', revenue: 44 },
    { name: 'salad', revenue: 62.7 },
  ];

  const pieChartData = [
    { name: 'soup', value: 45 },
    { name: 'salad', value: 55 },
  ];

  const COLORS = ['#059212', '#00FF00'];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar /> {/* Include Sidebar */}
      <div className="flex-grow md:ml-20 p-6">
        <h1 className="text-2xl font-bold mb-6">Hi, <span className='text-green'>Abedalmajeed Alajarmah</span></h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-white">
          {cardData.map((card, index) => (
            <DashboardCard key={index} {...card} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-green">Revenue by Item</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#059212" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-green">Sales Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              {pieChartData.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center mx-2">
                  <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
