import "./App.css";
import { Route, Switch } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <PageOne />
        </Route>
        <Route path="/two">
          <PageTwo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
