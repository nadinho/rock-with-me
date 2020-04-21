import React from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import NewRequest from "./pages/NewRequest";
import ConcertRequest from "./pages/ConcertRequest";

import TabNavigation from "./components/TabNavigation";
import {
  HomeIcon,
  KonzerteIcon,
  MessagesIcon,
  ProfilIcon,
} from "./assets/icons/Icons";

export default function App() {
  const [activeNavItem, setActiveNavItem] = React.useState("Home");
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
            <Concerts />
          </Route>

          <Route path="/konzertanfrage">
            <NewRequest />
          </Route>

          <Route path="/concerts/:concertId">
            <ConcertRequest />
          </Route>

          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/profil">
            <Profile />
          </Route>
        </Switch>
      </Main>
      <TabNavigation
        links={[
          {
            label: "home",
            Icon: HomeIcon,
          },
          {
            label: "konzerte",
            Icon: KonzerteIcon,
          },
          {
            label: "messages",
            Icon: MessagesIcon,
          },
          {
            label: "profil",
            Icon: ProfilIcon,
          },
        ]}
        value={activeNavItem}
        onItemClick={(item) => setActiveNavItem(item)}
      />
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
