import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import MapPage from "./pages/MapPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Redirect exact from="/" to="/map" />
        <Redirect exact from="/login" to="/map" />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/map" to="/login" component={MapPage} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Redirect exact from="/profile" to="/login" />
      <Redirect exact from="/map" to="/login" />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
