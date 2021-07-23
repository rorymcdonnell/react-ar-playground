import React from "react";
import useGeolocation from "react-hook-geolocation";

const Camera = () => {
  const geolocation = useGeolocation();
  return (
    <div>
      <h3>LATITUDE: {geolocation.latitude}</h3>
      <h3>LONGITUDE: {geolocation.longitude}</h3>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
      >
        <a-text
          value="This will always face the user."
          look-at="[gps-camera]"
          scale="75 75 75"
          // gps-entity-place="latitude: 53.452136>; longitude: -2.264797;"
          gps-entity-place={`latitude: ${geolocation.latitude}; longitude: ${geolocation.longitude}`}
        ></a-text>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
};

export default Camera;
