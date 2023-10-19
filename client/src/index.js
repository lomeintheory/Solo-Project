import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';


createRoot(document.getElementById('root')).render(<App/>)
// ReactDOM.render(<App />, document.getElementById('root'));