import { useEffect, useState } from "react";
// import { useNavigate } from "react-router"
import Header from './Header';

import './userPosts.css';




export default function UserPosts ({ isAuthenticated,setUser,setIsAuthenticated, user}){

    const [posts, setPost] = useState([])
    const [comment, setComment] = useState('')
    console.log(user.username)

    useEffect(() => {
        fetch(`/posts`)
         .then(response =>response.json())
         .then((data) => setPost(data))
    }, []);
    const userPost = posts.filter(post => post.user.username === user.username)
    console.log(userPost)

    
    return(
        <div id="userPostPage">
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <h3>Welcome {user.username}</h3>
            <h6>Below are all of your posts</h6>
            <div id="posts">
                {userPost.map(user =>
                    <div id="updatePostsSection" key={user.id}>
                        <p>Title: {user.title} <br></br>
                        Caption: {user.content} <br></br>
                        <input value={comment} onChange={(event) =>setComment(event.target.value)} PlaceHolder="update your caption here!"></input>
                        <button id="updateButton" className="button is-primary" onClick={(e)=>{
                            // e.preventDefault();
                            const updatedContent = {
                                content: comment
                            }
                            console.log(updatedContent)
                            fetch(`/posts/${user.id}`, {
                                method: "PATCH",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(updatedContent),
                            })
                        }}
                        >Submit</button>
                        <button id="updateButton" className="button is-warning" onClick={(e)=>{
                            fetch(`/posts/${user.id}`,{
                                method: "DELETE",
                            })
                        }}
                        >DELETE</button>
                        </p>
                    </div>
                )}
            </div>

        </div>
    )
}