import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import pageData from './images.json';

//console.log(pageData);

const { image } = pageData.pageData[0];

//console.log(image);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App image={image} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();