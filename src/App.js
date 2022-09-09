import "./styles.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}
