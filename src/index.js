import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Loginone from './newproject/main'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <BrowserRouter>
            <Loginone />

        </BrowserRouter>

    </React.StrictMode>

);


