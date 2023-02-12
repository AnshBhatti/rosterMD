import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Mgo+DSMBaFt/QHRqVVhkVVpHaV5BQmFJfFBmQmlZdlR1d0UmHVdTRHRcQl9iSH9ad0FjWnpWcH0=;Mgo+DSMBPh8sVXJ0S0J+XE9Af1RBQmJKYVF2R2BJeFRwfV9DY0wxOX1dQl9gSXxSd0RqWHtec3FcQ2k=;ORg4AjUWIQA/Gnt2VVhkQlFaclZJXnxIfUx0RWFab1l6dFxMZV9BJAtUQF1hSn5Rd0RiUH5acHdTRmdV;MTExMjcxMUAzMjMwMmUzNDJlMzBaQ3dDVUF1dVJZNk94QnhlYzdodkVxMlNmVS9rOTBJbXhva3pINUt1VUU0PQ==;MTExMjcxMkAzMjMwMmUzNDJlMzBEK0Urdm00UEF4bUxYYTRZWHY5VGdhTDU4YzBwdWQrMHU3enZRMHNwWEgwPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtLVmBWf1BpR2NbfE53flVPallSVBYiSV9jS31TdERiWHZfdHRWQGZeVQ==;MTExMjcxNEAzMjMwMmUzNDJlMzBkSDB5VGhLZElmWEp4L3o3N2xXK0dmQW9KRExoMkhNemNxV0FEUU0zK3hZPQ==;MTExMjcxNUAzMjMwMmUzNDJlMzBXbVd6VERtMjYvZ3ZhV2dpVkQwTklhdHpKN2Q4Q2dOeW5DNWJYS1d1dUI4PQ==;Mgo+DSMBMAY9C3t2VVhkQlFaclZJXnxIfUx0RWFab1l6dFxMZV9BJAtUQF1hSn5Rd0RiUH5acHdSR2RY;MTExMjcxN0AzMjMwMmUzNDJlMzBWa1JxbTZaYjFKTERadnpUMDdqVnpvaWJQcHRXcHBWR3kyKzRZVGVFa0lnPQ==;MTExMjcxOEAzMjMwMmUzNDJlMzBuOFBjbFFtQVN4MFU2VkJkakEzZXlQSmJqWE9XQ212aEJlc05HMVVzQ1JnPQ==;MTExMjcxOUAzMjMwMmUzNDJlMzBkSDB5VGhLZElmWEp4L3o3N2xXK0dmQW9KRExoMkhNemNxV0FEUU0zK3hZPQ==');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
