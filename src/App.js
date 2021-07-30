import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
