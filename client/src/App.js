import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/Login';
import Auth from './components/Auth';
import MapPage from './components/MapPage';
import AddPost from './components/AddPost';
import AddBottle from './components/AddBottle';
import AddAddress from './components/AddAddress';
import UserPosts from './components/UserPosts';
import Protected from './Protected';
import 'bulma/css/bulma.min.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState(false)
  const [user, setUser] = useState(null)
  const [bottleID, setBottleID] = useState("")
  const [postID, setPostID] = useState("")

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
              <Route path= "/AddPost"  element = {<Protected isAuthenticated={isAuthenticated}><AddPost bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /></Protected>} />
              <Route path= "/UserPosts"  element = {<Protected isAuthenticated={isAuthenticated}><UserPosts bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /></Protected>} />
              <Route path= "/AddBottle"  element = {<AddBottle bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
              <Route path= "/AddAddress"  element = {<AddAddress bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
            </Routes>
          </Router>
        </div>
  );
}

export default App