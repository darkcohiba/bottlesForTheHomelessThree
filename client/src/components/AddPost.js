import { useState } from "react";
// import { useNavigate } from "react-router"
import Header from './Header';
import Footer from './Footer';




export default function AddPost ({ isAuthenticated,setUser,setIsAuthenticated, user}){

    
    return(
        <div>
            <Header  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
            <div id="postInfo">
                <h3>Post Information</h3>
                <form>
                    <input className=" input" type="text" placeholder="Post Title..."></input>
                    <input className=" input" type="text" placeholder="Caption..."></input>
                </form>
            </div>
            <div id="bottleInfo">
                <h3>Bottle Information</h3>
                <input className=" input is-link" type="text" placeholder="Picture Link..."></input>
                <div class="control">
                    Does your recycling contain glass?
                    <label class="radio">
                        <input type="radio" name="answer"></input>
                        Yes
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer"></input>
                        No
                    </label>
                </div>
            </div>
            <div id="addInfo">
                <h3>Address Information</h3>
                <p>If you are having trouble finding the longitude and latitude of your address we reccomend the following website: <a href="https://www.gps-coordinates.net/"target="new">www.gps-coordinates.net</a>.</p>
                <form>
                    <input className=" input" type="text" placeholder="Address Line 1"></input>
                    <input className=" input" type="text" placeholder="City"></input>
                    <input className=" input" type="text" placeholder="State"></input>
                    <input className=" input" type="text" placeholder="Country"></input>
                    <input className=" input" type="text" placeholder="Zipcode"></input>
                    <input className=" input" type="text" placeholder="latitude"></input>
                    <input className=" input" type="text" placeholder="Longitude"></input>
                </form>
            </div>
            <Footer />
        </div>
    )
}