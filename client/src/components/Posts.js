import './posts.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router"






export default function Posts ({}){

    const navigate = useNavigate()
    const [claimed, setClaimed] = useState(false)
    const [posts, setPost] = useState([])
    const [comment, setComment] = useState('')

    useEffect(() => {
        fetch("/posts")
         .then(response =>response.json())
         .then((data) => setPost(data))
    }, []);
    console.log(posts)



    function updatedClaimed(e){
        e.preventDefault();
        setClaimed = true;
    }
    
    function onHome(){
        navigate("/map")
    }
    return(
        <div class="image-container">
        {posts.map(post=>
            <div class="image-card">
                <h8 id="card-title" class="title">{post.title}</h8>
                <h4 id="card-owner" class="owner">Uploaded by: {post.user.username}</h4>
                <img id="card-image" class="image" src={post.bottle.picture} alt={post.title} />
                <div className="address-claimed">
                    <p onClick={onHome}>{post.addresses.line_1},{"\n"}
                    {post.addresses.city}, {post.addresses.state} {post.addresses.zipcode}
                    </p>
                    <button id="like-button" class="like-button" onClick={updatedClaimed} >CLAIMED</button>
                </div>
                <ul id="comments-list" class="comments">
                    <li>Comments will load here</li>
                </ul>
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
                    <button class="comment-button" type="submit">Post</button>
                </form>
            </div>
            )}
        </div>
    )
}