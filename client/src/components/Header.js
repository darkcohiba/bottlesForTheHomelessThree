import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import pnglogo from "../assets/2.png"
import './header.css';
import { IoAddOutline, IoMapSharp, IoBook } from "react-icons/io5";

 



export default function Header ({isAuthenticated,setUser,setIsAuthenticated, user}){

    const navigate = useNavigate();

    function logout(){
        fetch("/logout",{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false);
            setUser(null);
            navigate("/")
        })
    }

    function onMove(){
        navigate("/")
    }

    function postPage(){
        navigate("/AddPost")
    }

    function goToMap(){
        navigate("/map")
    }

    function moveLogin(){
        navigate("/login")
    }

    function myPosts(){
        navigate("/userposts")
    }

    return(
        <div class="navbar-menu is-fixed-top">
        {/* <a class="navbar-item"> */}
            <img onClick={onMove} src={pnglogo} width="112" height="60" alt="Instagram"></img>
            <IoMapSharp id="plus" onClick={goToMap}/>
        {/* </a> */}
        {/* <div class="navbar is-centered">
            <input type="text" id="search" name='search' value = {search} placeholder="Search a post!" onChange={(event)=>{setSearch(event.target.value)}}></input>
            <button type="button" onClick={onSubmit}>Search!</button>
        </div> */}
            <div className="navbar-end">
                <div>
                    <IoAddOutline id="plus" onClick={postPage}/>
                </div>
                {user ?
                <IoBook id="plus" onClick={myPosts} />
                :
                null
                }
                {!user ?
                <button className="button is-success" onClick={moveLogin}>Login</button>
                :
                <button className="button is-warning" onClick={logout}>Logout</button>
                }
            </div>
        </div>
    )
}