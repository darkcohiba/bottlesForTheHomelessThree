import { useState } from "react";
// import { useNavigate } from "react-router"
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import './homePage.css';




export default function Homepage ({ isAuthenticated,setUser,setIsAuthenticated, user}){

    const [search, setSearch] = useState("")
    
    return(
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <Posts isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            {/* <Footer /> */}
        </div>
    )
}