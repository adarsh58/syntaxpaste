import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Css from './Demo/Responsive';
import Index from './Demo/lazy/Index';
import Responsive from './Demo/Responsive';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <App /> 
     {/*<Index/> */}
     {/* <Responsive/> */}
  
  </React.StrictMode>
);

