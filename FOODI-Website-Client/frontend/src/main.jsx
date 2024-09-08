// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     </React.StrictMode>,
// )



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
// import './index.css';
// import App from './App';

// // Get Google Client ID from environment variables
// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={clientId}>
//       <App />
//     </GoogleOAuthProvider>
//   </React.StrictMode>,
// );


// src/main.jsx

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import './index.css';
// import App from './App';

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={clientId}>
//       <App />
//     </GoogleOAuthProvider>
//   </React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
