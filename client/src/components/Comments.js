import './comment.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router"

export default function Comment({post, user}){
    const [comment, setComment] = useState('')


    return(
        <div>
            {user ? 
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
                                e.preventDefault()
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
                                    .then((data) => setComment(data))
                            }}
                    >Post</button>
                </form>
            : null
            }
        </div>
    )
}