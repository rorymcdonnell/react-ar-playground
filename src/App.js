import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ComponentWithGeolocation from "./components/ComponentWithGeolocation";
import Camera from "./components/Camera";
import Home from "./components/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/camera">
            <Camera />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
