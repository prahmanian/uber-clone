import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import token from '../../private/MapBoxToken'

// set to private accesss token
// replace with valid MapBox access token
mapboxgl.accessToken = token

function getLocation () {
    navigator.geolocation && navigator.geolocation.getCurrentPosition((position) => {
    sessionStorage.setItem('lat', position.coords.latitude)
    sessionStorage.setItem('lng', position.coords.longitude)
})}

const Map = () => {
    
    useEffect(() => {
        getLocation()
        const lat = sessionStorage.getItem('lat') ? sessionStorage.getItem('lat') : 39.39172
        const lng = sessionStorage.getItem('lng') ? sessionStorage.getItem('lng') : -99.29011
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [lng, lat],
        zoom: sessionStorage.getItem('lat') ? 12 : 3 
        });
    });

    return (
        <MapWrapper id='map'>
            
        </MapWrapper>
    )
}

const MapWrapper = tw.div`
    flex-1
`

export default Map
