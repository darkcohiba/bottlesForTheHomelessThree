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
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <div id="userPostPage">
                <br></br>
                <br></br>
                <h3 id="welcomeTitle">Welcome {user.username}!</h3>
                <h6 id="postsBelow">Below are all of your posts</h6>
                {userPost ? 
                    <div id="updatedPostContainer">
                        {userPost.map(user =>
                            <div id="overall">
                                <div id="updatePostsSection" key={user.id}>
                                    <p id="postTitle">Title: {user.title} </p>
                                    <img id="postImage" src={user.bottle.picture} alt={user.title}></img>
                                    <p id="oldComment">Caption: {user.content}</p>
                                    <textarea id="newComment" value={comment} onChange={(event) =>setComment(event.target.value)} PlaceHolder="update your caption here! No Character Limit!!"></textarea><br></br>
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
                                    <button id="deleteButton" className="button is-warning" onClick={(e)=>{
                                        fetch(`/posts/${user.id}`,{
                                            method: "DELETE",
                                        })
                                    }}
                                    >DELETE</button>
                                </div>
                            </div>
                        )}
                    </div>
                : 
                <p>you have no posts to edit!</p>
                }
            </div>
        </div>
        
    )
}