import {createRoot} from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);