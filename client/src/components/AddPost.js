import { useState } from "react";
import { useNavigate } from "react-router"
import Header from './Header';
import Footer from './Footer';




export default function AddPost ({ isAuthenticated,setUser,setIsAuthenticated, user}){


    const navigate = useNavigate(); 
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [photo, setPhoto] = useState("")
    const [glass, setGlass] = useState(false)
    const [lineOne, setLineOne] = useState("")
    const [cityName, setCityName] = useState("")
    const [stateName, setStateName] = useState("")
    const [countryName, setCountryName] = useState("")
    const [zipcodeDig, setZipcodeDig] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    function onSubmit(){
        navigate("/")
    }


    
    return(
        <div>
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <div id="postInfo">
                <h3>Post Information</h3>
                <form>
                    <input className=" input" type="text" placeholder="Post Title..." value={title} onChange={(event) =>setTitle(event.target.value)}></input>
                    <input className=" input" type="text" placeholder="Caption..." value={content} onChange={(event) =>setContent(event.target.value)}></input>
                </form>
            </div>
            <div id="bottleInfo">
                <h3>Bottle Information</h3>
                <input className=" input is-link" type="text" placeholder="Picture Link..." value={photo} onChange={(event) =>setPhoto(event.target.value)}></input>
                <div class="control">
                    Does your recycling contain glass? 
                    {!glass ? <button className="button is-warning" onClick={() => setGlass(!glass)} >YES </button> : <button className="button is-warning" onClick={() => setGlass(!glass)} >NO </button> }
                </div>
            </div>
            <div id="addInfo">
                <h3>Address Information</h3>
                <p>If you are having trouble finding the longitude and latitude of your address we reccomend the following website: <a href="https://www.gps-coordinates.net/"target="new">www.gps-coordinates.net</a>.</p>
                <form>
                    <input className=" input" type="text" placeholder="Address Line 1" value={lineOne} onChange={(event) =>setLineOne(event.target.value)} ></input>
                    <input className=" input" type="text" placeholder="City" value={cityName} onChange={(event) =>setCityName(event.target.value)}></input>
                    <input className=" input" type="text" placeholder="State" value={stateName} onChange={(event) =>setStateName(event.target.value)}></input>
                    <input className=" input" type="text" placeholder="Country" value={countryName} onChange={(event) =>setCountryName(event.target.value)}></input>
                    <input className=" input" type="text" placeholder="Zipcode" value={zipcodeDig} onChange={(event) =>setZipcodeDig(event.target.value)}></input>
                    <input className=" input" type="text" placeholder="Latitude" value={latitude} onChange={(event) =>setLatitude(event.target.value)}></input>
                    <input className=" input" type="text" placeholder="Longitude" value={longitude} onChange={(event) =>setLongitude(event.target.value)}></input>
                </form>
            </div>
            <button className="button is-success" onClick={onSubmit}>Add Post</button>
            <div>
                <iframe src='https://my.spline.design/molang3dcopy-284010e02a57d9cc764283d5fffb9cb0/' frameborder='0' width='100%' height='300px'></iframe>
            </div>
            {/* <Footer /> */}
        </div>
    )
}