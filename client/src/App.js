import React from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Konzerte from "./pages/Konzerte";
import Messages from "./pages/Messages";
import Profil from "./pages/Profil";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/konzerte">
            <Konzerte />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
