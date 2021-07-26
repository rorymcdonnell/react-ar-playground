import React from "react";
import useGeolocation from "react-hook-geolocation";
import { Entity, Scene } from "aframe-react";
import "aframe";

const Camera = () => {
  const geolocation = useGeolocation();
  return (
    <div>
      <div>
        <h3 className="latitude">LATITUDE: {geolocation.latitude}</h3>
        <h3 className="longitude">LONGITUDE: {geolocation.longitude}</h3>
      </div>
      {/* <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
      >
        <a-text
          value="This will always face the user."
          look-at="[gps-camera]"
          scale="75 75 75"
          // gps-entity-place="latitude: 53.452136>; longitude: -2.264797;"
          gps-entity-place={`latitude: ${geolocation.latitude}; longitude: ${geolocation.longitude};`}
        ></a-text>

        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene> */}
      <Scene>
        <Entity
          geometry={{ primitive: "box", width: 5 }}
          scale={{ x: 2, y: 2, z: 2 }}
          position={{ x: 0, y: 0, z: -5 }}
        />
      </Scene>
    </div>
  );
};

export default Camera;
