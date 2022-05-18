import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/Login';
import Auth from './components/Auth';
import 'bulma/css/bulma.min.css';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null)


  return (
    <div>
          <Router>
            <Routes>
              <Route path= "/"  element = {<Homepage />} />
              <Route path= "/login"  element = {<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
              <Route path= "/Auth"  element = {<Auth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
            </Routes>
          </Router>
        </div>
  );
}

export default App;

