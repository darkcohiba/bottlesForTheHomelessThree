import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/Login';
import Auth from './components/Auth';
import MapPage from './components/MapPage';
import AddPost from './components/AddPost';
import Protected from './Protected';
import 'bulma/css/bulma.min.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user), setIsAuthenticated(true));
      }
    });
      }, []);



  return (
    <div>
          <Router>
            <Routes>
              <Route path= "/"  element = {<Homepage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
              <Route path= "/login"  element = {<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
              <Route path= "/Auth"  element = {<Auth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
              <Route path= "/Map"  element = {<MapPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
              <Route path= "/AddPost"  element = {<Protected isAuthenticated={isAuthenticated}><AddPost isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /></Protected>} />
            </Routes>
          </Router>
        </div>
  );
}

export default App