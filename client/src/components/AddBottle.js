import { useState } from "react";
import { useNavigate } from "react-router"
import Header from './Header';
import './addBottle.css';



export default function AddBottle ({ isAuthenticated,setUser,setIsAuthenticated, user, bottleID, setBottleID, postID, setPostID}){


    const navigate = useNavigate(); 

    const [photo, setPhoto] = useState("")
    const [glass, setGlass] = useState(false)

    const newBottle = {
        picture: photo,
        post_id: postID,
        isClaimed: false,
        isGlass: glass
    }

    function submitPost(){
        fetch(`/bottles`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newBottle)})
            .then(response => response.json())
            .then((data) =>{
                console.log(data)
                setBottleID(data.id)
            })
        navigate("/addaddress")
    }


    
    return(
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <div id="wrapper">
                <div id="bottleInfo">
                    <h3>Bottle Information</h3>
                    <br></br>
                    <form className="form">
                        <input className=" input is-link" type="text" placeholder="Picture Link..." value={photo} onChange={(event) =>setPhoto(event.target.value)}></input>
                        <div class="control">
                            <br></br>
                            Does your recycling contain glass? 
                            <br></br>
                            {!glass ? <button id="glassButton" className="button is-warning" onClick={(e) => {e.preventDefault()
                                 setGlass(!glass)}} >YES </button> : <button id="glassButton" className="button is-warning" onClick={(e) => {e.preventDefault()
                                    setGlass(!glass)}} >NO </button> }
                        </div>
                    </form>
                    <button id="addButton" className="button is-success" onClick={submitPost}>Add Address to Bottle</button>
                    <div>
                        <iframe src='https://my.spline.design/molang3dcopy-284010e02a57d9cc764283d5fffb9cb0/' frameborder='0' width='100%' height='fit-content'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}