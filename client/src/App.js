import React from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import { UserRoutes } from "./UserRoutes";
import AuthProvider from "./contexts/AuthProvider";

import Start from "./pages/Start";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import ReactNotifications from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <ReactNotifications />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <UserRoutes />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
