import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Compass from "./components/Compass";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/react-ar-playground">
            <Compass />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
