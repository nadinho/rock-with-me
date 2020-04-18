import React from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Konzerte from "./pages/Konzerte";
import Messages from "./pages/Messages";
import Profil from "./pages/Profil";
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
      <TabNavigation
        links={[
          {
            label: "Home",
            Icon: HomeIcon,
          },
          {
            label: "Konzerte",
            Icon: KonzerteIcon,
          },
          {
            label: "Messages",
            Icon: MessagesIcon,
          },
          {
            label: "Profil ",
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
`;
