import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import pnglogo from "../assets/2.png"
import './header.css';
import { IoAddOutline, IoMapSharp } from "react-icons/io5";

 



export default function Header ({ setPosts, search, setSearch, isAuthenticated,setUser,setIsAuthenticated, user}){

    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        
    }

    // useEffect(()=> {
    //     fetch(`http://localhost:3000/posts/${search}`)
    //         .then((resp) => resp.json())
    //         .then((data) => setPosts(data))
    // },[onSubmit])



    function onMove(){
        navigate("/")
    }

    function postPage(){
        navigate("/AddPost")
    }

    function goToMap(){
        navigate("/map")
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
                <div class="button is-danger">
                    logout
                </div>
            </div>
        </div>
    )
}