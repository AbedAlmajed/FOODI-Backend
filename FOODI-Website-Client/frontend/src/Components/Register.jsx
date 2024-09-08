

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userID = params.get('userID');
    const token = params.get('token');
    if (userID && token) {
      localStorage.setItem('userID', userID);
      localStorage.setItem('token', token);
      navigate('/');
    }
  }, [navigate, location]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
      }, {
        withCredentials: true
      });

      if (response.status === 201) {
        localStorage.setItem('userID', response.data.userID);
        localStorage.setItem('token', response.data.token);
        navigate('/');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  const handleGoogleLogin = () => {
    const url = 'http://localhost:5000/api/users/google';
    window.location.href = url;
  };

  return (
    <div className='pt-10 login'>
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20 rounded">
        <div className="modal-action flex flex-col justify-center mt-0 w-full px-8 py-6">
          <h3 className="font-bold text-2xl text-center mb-6">Create An Account!</h3>
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-green text-white">
                Register
              </button>
            </div>
          </form>
          <p className="text-center my-4">
            Have an account?
            <Link to="/login">
              <span className="text-green-500 ml-1 hover:underline">Login</span>
            </Link>
          </p>
          <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}