import Header from './Header';
import Footer from './Footer';
import Map, {Marker} from 'react-map-gl';
import './posts.css';




export default function MapPage(){
    return(
        <div>
            <Header />
            <div id="mapBoxContainer">
                <div>
                    <Map
                        initialViewState={{
                            longitude: -105.001715,
                            latitude: 39.752657,
                            zoom: 12
                        }}
                        style={{width: 1500, height: 750}}
                        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                        mapboxAccessToken='pk.eyJ1IjoiZGFya2NvaGliYSIsImEiOiJjbDNkdzd5YmQwMDJzM2NuOGRjMzMybzlmIn0.zTD1-NwCvNlExYYFWxvzmQ'
                    >
                        <Marker longitude={-105.0255292} latitude={39.7689534} anchor="bottom" style={{height:'50px', width: '50px'}}>
                        </Marker>
                    </Map>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}