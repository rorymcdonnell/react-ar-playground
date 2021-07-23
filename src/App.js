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
        <a-text
          value="This will always face the user."
          look-at="[gps-camera]"
          scale="75 75 75"
          gps-entity-place="latitude: 53.452136>; longitude: -2.264797;"
        ></a-text>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
}

export default App;
