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
    console.log(user)
    
    function onHome(){
        navigate("/map")
    }
    return(
        <div class="post-container">
            {posts.map(post=>
                <div key={post.id} class="image-card">
                    <h8 id="card-title" class="title">{post.title}</h8>
                    <h4 id="card-owner" class="owner">Uploaded by: {post.user.username}</h4>
                    <img id="card-image" class="image" src={post.bottle.picture} alt={post.title} />
                    <div className="address-claimed">
                        <p onClick={onHome}>{post.addresses.line_1},{"\n"}
                        {post.addresses.city}, {post.addresses.state} {post.addresses.zipcode}
                        </p>
                        {!post.bottle.isClaimed ? <button id="like-button" class="like-button" 
                            onClick={(e)=>{
                                        // e.preventDefault()
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
                                        window.location.reload()
                                    }} >CLAIM</button> 
                        : 
                        <button id="claimed-button" class="claimed-button" >CLAIMED</button>}
                        
                    </div>
                    <div>
                        {post.content}
                    </div>
                    <ul id="comments-list" class="comments">
                        {post.comments.map(comment => 
                            <li>{comment.content} by: {comment.user.username}</li>
                        )}
                    </ul>
                    {/* {user ? 
                        <form id="comment-form" class="comment-form">
                            <input
                                class="comment-input"
                                type="text"
                                name="comment"
                                id="comment"
                                placeholder="Add a comment..."
                                value={comment}
                                onChange={(event) =>setComment(event.target.value)}
                            />
                            <button class="comment-button" type="submit" onClick={(e)=>{
                                        // e.preventDefault()
                                        const newComment = {
                                            content: comment,
                                            user_id: user.id,
                                            post_id: post.id,
                                        }
                                        fetch(`/comments`,{
                                            method:'POST',
                                            headers:{'Content-Type': 'application/json'},
                                            body:JSON.stringify(newComment)})
                                            .then(response => response.json())
                                            .then((data) => console.log(data))
                                    }}
                            >Post</button>
                        </form>
                    : null
                    } */}
                    <Comments post={post} user={user}/>
                </div>
            )}
        </div>
    )
}