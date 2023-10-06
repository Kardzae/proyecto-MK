import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Importa BrowserRouter y otras partes necesarias
import Reinoselector from './Componentes/ReinoSelector';

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Reinoselector",
    element: <Reinoselector />,
  },

];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
);
