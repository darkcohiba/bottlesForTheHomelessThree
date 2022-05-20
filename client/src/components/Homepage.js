import { useState } from "react";
// import { useNavigate } from "react-router"
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import './homePage.css';




export default function Homepage ({ isAuthenticated,setUser,setIsAuthenticated, user}){

    const [search, setSearch] = useState("")
    const[posts, setPosts] = useState([])
    
    return(
        <div>
            <Header setPosts={setPosts} search={search} setSearch={setSearch} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <Posts />
            <Footer />
        </div>
    )
}