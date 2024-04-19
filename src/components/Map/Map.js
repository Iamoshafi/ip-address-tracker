import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import "leaflet/dist/leaflet.css";
import "./Map.css"
import { Icon } from "leaflet";

const Map = ( { coordinates } ) => {
  const markers = [{
    geocode: [coordinates.lat, coordinates.long]
  }]

  const customIcon = new Icon({
    iconUrl:
      require("../../images/placeholder.png"),
    iconSize: [38, 38],
  });
  
  return (
    <div className="map">
      <MapContainer center={[coordinates.lat, coordinates.long]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>

        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

