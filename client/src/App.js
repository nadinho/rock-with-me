import React from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import NewConcert from "./pages/NewConcert";
import CreatedConcert from "./pages/CreatedConcert";

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
          <Route exact path="/" component={Start} />
          <Route path="/home" component={Home} />
          <Route exact path="/concerts" component={Concerts} />
          <Route path="/newconcert" component={NewConcert} />
          <Route path="/concerts/:concertId" component={CreatedConcert} />
          <Route path="/messages" component={Messages} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Main>
      <TabNavigation
        links={[
          {
            label: "Home",
            Icon: HomeIcon,
            id: "home",
          },
          {
            label: "Konzerte",
            Icon: KonzerteIcon,
            id: "concerts",
          },
          {
            label: "Nachrichten",
            Icon: MessagesIcon,
            id: "messages",
          },
          {
            label: "Profil",
            Icon: ProfilIcon,
            id: "profile",
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
