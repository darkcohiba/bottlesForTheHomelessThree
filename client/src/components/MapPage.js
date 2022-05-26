import Header from './Header';
import Footer from './Footer';
// import Map, {Marker, FullscreenControl} from 'react-map-gl';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import './mapPage.css';
import React, { useEffect, useState } from 'react';
import pnglogo from "../assets/RecyclingIcon.png"






export default function MapPage(){

    const [add, setAdd]= useState([])
    const [selected, setSelected]= useState(null)

    useEffect(() => {
        fetch("/addresses")
         .then(response =>response.json())
         .then((data) => setAdd(data))
    }, []);

    console.log(add)

    const defaultCenter = {
        lng: -105.001715,
        lat: 39.752657,
    }

    const mapStyles = {
        height: '92vh',
        width: '80%',
        left: "150px",
    }

    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    }
    console.log(selected)

    
    return(
        <div>
            <Header />
            <div id="mapBoxContainer">
                <div>
                    <LoadScript id ="map" googleMapsApiKey="AIzaSyCMGRs1jBu4369ZEW187WZYOXkAFaUR_Y0">
                        <GoogleMap 
                            mapContainerStyle={mapStyles}
                            zoom={12}
                            center={defaultCenter}
                            options={options}
                        >
                            {add.map((marker)=> (
                                <Marker 
                                    id="marker"
                                    key={marker.post.title} 
                                    position={{lat: marker.latitude, lng: marker.longitude}}
                                    icon={{
                                        url:pnglogo,
                                        scaledSize: new window.google.maps.Size(30,30),
                                        origin: new window.google.maps.Point(0,0),
                                        anchor: new window.google.maps.Point(15,15),
                                    }}
                                    onClick={()=>{
                                        setSelected(marker);
                                    }}
                                />
                            ))}

                            {selected ? (
                            <InfoWindow position={{ lat: selected.latitude, lng: selected.longitude}} onCloseClick={()=>{setSelected(null)}} >
                                <div>
                                    <h2>{selected.post.title}</h2>
                                    <p>{selected.post.content}</p>
                                    <h2>Address</h2>
                                    <p>{selected.line_1}, {selected.city}</p>
                                    <p>{selected.state}, {selected.zipcode}</p>
                                    {!selected.bottle.isClaimed ? <button id="like-button" class="like-button" 
                                        onClick={(e)=>{
                                                    // e.preventDefault()
                                                    const id = selected.bottle.id;
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
                            </InfoWindow>
                            ) : null}
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            <Footer />
        </div>
    )
}