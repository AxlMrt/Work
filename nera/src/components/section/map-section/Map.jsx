import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Marker from "./assets/pin.png"
import { map, tileLayer, Browser } from 'leaflet';
import './assets/map.css';

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const initialState = {
      lng: 6.179540993366737,
      lat: 49.1125988876199,
      zoom: 14,
    };

    const leafletMap = map(mapContainer.current).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    const myAPIKey = '4ff17409094c4c4ba206854caa5bcaf9';
    const isRetina = Browser.retina;
    let baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${myAPIKey}`;
    let retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${myAPIKey}`;

    tileLayer(isRetina ? retinaUrl : baseUrl, {
      maxZoom: 20,
      id: 'osm-bright',
    }).addTo(leafletMap);

    let customIcon = {
      iconUrl: Marker,
      iconRetinaUrl: Marker,
      popupAnchor:  [-0, -0],
      iconSize:[40,40]
     }

     let myIcon = L.icon(customIcon);
     
     let iconOptions = {
      title: "Nera-Sandwicherie",
      draggable: false,
      icon: myIcon,
     }

    let taison = new L.Marker([49.118897, 6.177342], iconOptions);
    let muse = new L.Marker([49.1055357, 6.1816902], iconOptions);
    taison.addTo(leafletMap);
    muse.addTo(leafletMap)
    
  }, []);
  return <div className="map-container" ref={mapContainer}></div>;
};

export default Map;