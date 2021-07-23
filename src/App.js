import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
      >
        <a-entity
          gltf-model="./assets/magnemite/scene.gltf"
          rotation="0 180 0"
          scale="0.15 0.15 0.15"
          gps-entity-place="longitude: -2.264797; latitude: 53.452136;"
          animation-mixer
        />
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
}

export default App;
