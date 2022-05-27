import { useState } from "react";
import { useNavigate } from "react-router"
import Header from './Header';
import './addPost.css';




export default function AddPost ({ isAuthenticated,setUser,setIsAuthenticated, user, bottleID, setBottleID, postID, setPostID}){


    const navigate = useNavigate(); 
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    // const [photo, setPhoto] = useState("")
    // const [glass, setGlass] = useState(false)
    // const [lineOne, setLineOne] = useState("")
    // const [cityName, setCityName] = useState("")
    // const [stateName, setStateName] = useState("")
    // const [countryName, setCountryName] = useState("")
    // const [zipcodeDig, setZipcodeDig] = useState("")
    // const [latitude, setLatitude] = useState("")
    // const [longitude, setLongitude] = useState("")
    // const [bottleID, setBottleID] = useState("")
    // const [postID, setPostID] = useState("")

    const newPost = {
        title: title,
        content: content,
        user_id: user.id
    }
    function submitPost(){
        fetch(`/posts`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newPost)})
            .then(response => response.json())
            .then((data) =>{
                console.log(data.id)
                setPostID(data.id)})
        navigate("/addbottle")
    }


    
    return(
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <div id="wrapper">
                <div id="postInfo">
                    <h3 id="addPostInfoTitle">Post Information</h3>
                    <form className="form">
                        <input className=" input" type="text" placeholder="Post Title..." value={title} onChange={(event) =>setTitle(event.target.value)}></input>
                        <input className=" input" type="text" placeholder="Caption..." value={content} onChange={(event) =>setContent(event.target.value)}></input>
                    </form>
                    <button id="addPostButton" className="button is-success" onClick={submitPost}>Add Bottle to Post</button>
                    <div className="pika">
                        <iframe src='https://my.spline.design/molang3dcopy-284010e02a57d9cc764283d5fffb9cb0/' frameborder='0' width='100%' height='fit-content'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}