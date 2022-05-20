import Header from './Header';
import Footer from './Footer';
import Map from 'react-map-gl';
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
                        style={{width: 1200, height: 600}}
                        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                        mapboxAccessToken='pk.eyJ1IjoiZGFya2NvaGliYSIsImEiOiJjbDNkdzd5YmQwMDJzM2NuOGRjMzMybzlmIn0.zTD1-NwCvNlExYYFWxvzmQ'
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}