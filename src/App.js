import React from "react";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import LoginForm from "./Components/Login/LoginForm";
import Profile from "./Components/Profile/Profile";
import AuthForm from "./Components/Login/AuthForm";
import Map from "./Components/Map/Map";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Redirect exact from="/" to="/map" /> */}
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={LoginForm} />
          <Route path="/auth" component={AuthForm} />
          <Route path="/profile" component={Profile} />
          {/* <PrivateRoute path="/profile" to="/login" component={ProfileForm} />  */}
          <Route path="/map" to="/login" component={Map} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
