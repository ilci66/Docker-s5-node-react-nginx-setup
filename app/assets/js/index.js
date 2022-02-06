import '../styles/app.css';
import '../bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';

// window.addEventListener('click', () => console.log(Home))


ReactDOM.render(<Router>
        <Layout>
            <App />
        </Layout>
    </Router>, document.getElementById('root'));