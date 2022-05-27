import './posts.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router"
import Comments from './Comments';







export default function Posts ({isAuthenticated,setUser,setIsAuthenticated, user}){

    const navigate = useNavigate()
    // const [claimed, setClaimed] = useState(false)
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch("/posts")
         .then(response =>response.json())
         .then((data) => setPost(data))
    }, []);
    
    function onHome(){
        navigate("/map")
    }
    return(
        <div class="post-container">
            {posts.map(post=>
                <div key={post.id} class="image-card">
                    <h8 id="card-title" class="title">{post.title}</h8>
                    <h4 id="card-owner" class="owner">Posted by: {post.user.username}</h4>
                    <img id="card-image" class="image" src={post.bottle.picture} alt={post.title} />
                    <div className="address-claimed">
                        <p  onClick={onHome}>{post.addresses.line_1},{' '}
                        {post.addresses.city}, {post.addresses.state} {post.addresses.zipcode}<br></br>(click me for a map)
                        </p>
                        {!post.bottle.isClaimed ?
                            <button id="like-button" class="like-button" 
                                onClick={(e)=>{
                                            e.preventDefault()
                                            const id = post.bottle.id;
                                            const updatedBottle = {
                                                isClaimed: true,
                                            };
                                            fetch(`/bottles/${id}`,{
                                                method:'PATCH',
                                                headers:{'Content-Type': 'application/json'},
                                                body:JSON.stringify(updatedBottle)})
                                                .then(response => response.json())
                                                .then((data) => console.log(data));
                                            navigate("/")
                                        }} >CLAIM</button> 
                            : 
                            <button id="claimed-button" class="claimed-button"
                                onClick={(e)=>{
                                    e.preventDefault()
                                    const id = post.bottle.id;
                                    const updatedBottle = {
                                        isClaimed: false,
                                    };
                                    fetch(`/bottles/${id}`,{
                                        method:'PATCH',
                                        headers:{'Content-Type': 'application/json'},
                                        body:JSON.stringify(updatedBottle)})
                                        .then(response => response.json())
                                        .then((data) => console.log(data));
                                    navigate("/")}}
                            >CLAIMED</button>}
                    </div>
                    <div id="caption">
                        <p>{" "}{post.content}{" "}</p>
                    </div>
                    <p id="isGlass">{post.bottle.isGlass ? "Recycling contains glass" : "Reclying does not contain glass."}</p>
                    <br></br>
                    <div id="commentWrapper">
                        <h6>Commments:</h6>
                        <ul id="comments-list" class="comments">
                            {post.comments.map(comment => 
                                <li>{comment.content} - {comment.user.username}</li>
                            )}
                        </ul>
                    </div>
                    <Comments post={post} user={user}/>
                </div>
            )}
        </div>
    )
}