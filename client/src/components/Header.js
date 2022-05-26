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

    function signUp(){
        navigate("/auth")
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
        <div id="nav" class="">
            <div id='navStart'>
                <img id='logo' onClick={onMove} src={pnglogo} width="112" height="60" alt="Instagram"></img>
                <IoMapSharp id="plus" onClick={goToMap}/>
            </div>
            <div id='navEnd'>
                {user ?
                <IoAddOutline id="plus" onClick={postPage}/>
                :
                null
                }
                {user ?
                <IoBook id="plus" onClick={myPosts} />
                :
                null
                }
                {!user ?
                <button id="logInButton" className="button is-success" onClick={moveLogin}>Login</button>
                :
                <button id='logOutButton' className="button is-warning" onClick={logout}>Logout</button>
                }
                {user ?
                null
                :
                <button id="signupButton" className="button is-success" onClick={signUp}>Sign Up</button>
                }
            </div>
        </div>
    )
}