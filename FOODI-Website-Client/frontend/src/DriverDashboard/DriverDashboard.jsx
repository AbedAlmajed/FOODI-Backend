// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DriverDashboard = () => {
//   const [driver, setDriver] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDriverData = async () => {
//       const driverID = localStorage.getItem('driverID');
//       const token = localStorage.getItem('driverToken');
      
//       if (!driverID || !token) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:4000/api/drivers/${driverID}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setDriver(response.data);
//       } catch (error) {
//         console.error('Error fetching driver data:', error);
//         navigate('/login');
//       }
//     };

//     fetchDriverData();
//   }, [navigate]);

//   if (!driver) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-5">Driver Dashboard</h1>
//       <p>Welcome, {driver.name}!</p>
//       {/* Add more driver-specific content here */}
//     </div>
//   );
// };

// export default DriverDashboard;












// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DriverDashboard = () => {
//   const [driver, setDriver] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDriverData = async () => {
//       const driverID = localStorage.getItem('driverID');
//       const token = localStorage.getItem('driverToken');
      
//       if (!driverID || !token) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:4000/api/drivers/${driverID}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setDriver(response.data);
//       } catch (error) {
//         console.error('Error fetching driver data:', error);
//         localStorage.removeItem('driverID');
//         localStorage.removeItem('driverToken');
//         navigate('/login');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDriverData();
//   }, [navigate]);

//   if (loading) return <div>Loading...</div>;
//   if (!driver) return <div>No driver data available.</div>;

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-5">Driver Dashboard</h1>
//       <p>Welcome, {driver.name}!</p>
//       {/* Add more driver-specific content here */}
//     </div>
//   );
// };

// export default DriverDashboard;





// // DriverDashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DriverDashboard = () => {
//   const [driver, setDriver] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDriverData = async () => {
//       const driverID = localStorage.getItem('driverID');
//       const token = localStorage.getItem('driverToken');
      
//       if (!driverID || !token) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:4000/api/drivers/${driverID}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setDriver(response.data);
//       } catch (error) {
//         console.error('Error fetching driver data:', error);
//         localStorage.removeItem('driverID');
//         localStorage.removeItem('driverToken');
//         navigate('/login');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDriverData();
//   }, [navigate]);

//   if (loading) return <div>Loading...</div>;
//   if (!driver) return <div>No driver data available.</div>;

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-5">Driver Dashboard</h1>
//       <p>Welcome, {driver.name}!</p>
//       {/* Add more driver-specific content here */}
//     </div>
//   );
// };

// export default DriverDashboard;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from "./Sidebar"

// const DriverDashboard = () => {
//   const [driver, setDriver] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDriverData = async () => {
//       const driverID = localStorage.getItem('driverID');
//       const token = localStorage.getItem('driverToken');
      
//       if (!driverID || !token) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:4000/api/drivers/me`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setDriver(response.data);
//       } catch (error) {
//         console.error('Error fetching driver data:', error);
//         localStorage.removeItem('driverID');
//         localStorage.removeItem('driverToken');
//         navigate('/login');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDriverData();
//   }, [navigate]);

//   if (loading) return <div>Loading...</div>;
//   if (!driver) return <div>No driver data available.</div>;

//   return (
//    <>
//     <Sidebar/>

// <div className="container mx-auto mt-10">
//   <h1 className="text-3xl font-bold mb-5">Driver Dashboard</h1>
//   <p>Welcome, {driver.name}!</p>
//   <p>Email: {driver.email}</p>
//   <p>Phone: {driver.phone}</p>
//   <p>Vehicle Type: {driver.vehicleType}</p>
//   <p>License Number: {driver.licenseNumber}</p>
// </div>
//    </>
//   );
// };

// export default DriverDashboard;

/////////////////////////////done.........................

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";

const DriverDashboard = () => {
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDriverData = async () => {
      const driverID = localStorage.getItem('driverID');
      const token = localStorage.getItem('driverToken');
      
      if (!driverID || !token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:4000/api/drivers/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDriver(response.data);
      } catch (error) {
        console.error('Error fetching driver data:', error);
        localStorage.removeItem('driverID');
        localStorage.removeItem('driverToken');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchDriverData();
  }, [navigate]);

  if (loading) return <div className="ml-64 p-4">Loading...</div>;
  if (!driver) return <div className="ml-64 p-4">No driver data available.</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-5">Driver Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, <span className='text-green'>{driver.name}</span></h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-green">Email:</p>
              <p>{driver.email}</p>
            </div>
            <div>
              <p className="font-bold text-green">Phone:</p>
              <p>{driver.phone}</p>
            </div>
            <div>
              <p className="font-bold text-green">Vehicle Type:</p>
              <p>{driver.vehicleType}</p>
            </div>
            <div>
              <p className="font-bold text-green">License Number:</p>
              <p>{driver.licenseNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;