import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
import "./App.css";
import { useRoutes } from "./routes";
function App() {
  const { token } = useSelector((state) => state.auth);
  const { card } = useSelector((state) => state.card);

  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  useEffect(() => {
    if (!card && isAuthenticated) {
      message.warning("Заполните данные карты в профиле");
    }
  }, []);
  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
