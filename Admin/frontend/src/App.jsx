import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Dashboard from './Admin/HomePage/Dashboard';
import AddUser from './Admin/HomePage/AddUser';
import UploadMenu from './Admin/HomePage/UploadMenu';
import ManageMenu from './Admin/HomePage/ManageMenu';
import CustomerSupport from './Admin/HomePage/CustomerSupport';
import Booking from './Admin/HomePage/Booking';
import AdminLogin from './Admin/Login/Login';
function App() {
  return (
    <BrowserRouter>

      <Routes>
       
        <Route path="/" element={<AdminLogin />} />
        <Route path="/user" element={<AddUser />} />
        <Route path="/add-menu" element={<UploadMenu />} />
        <Route path="/manage-items" element={<ManageMenu />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/booking" element={<Booking />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
