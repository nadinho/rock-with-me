import React from "react";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router-dom";

import Start from "./pages/Start";
import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import NewConcert from "./pages/NewConcert";
import CreatedConcert from "./pages/CreatedConcert";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import useAuth from "./contexts/useAuth";

import TabNavigation from "./components/TabNavigation";
import {
  HomeIcon,
  KonzerteIcon,
  MessagesIcon,
  ProfilIcon,
} from "./assets/icons/Icons";

const Navigation = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("");

  return (
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
  );
};

export const UserRoutes = () => {
  const { authenticatedUser } = useAuth();

  return (
    <>
      {authenticatedUser && (
        <Main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/concerts" component={Concerts} />
            <Route path="/newconcert" component={NewConcert} />
            <Route path="/concerts/:concertId" component={CreatedConcert} />
            <Route path="/messages" component={Messages} />
            <Route path="/:userId" component={Profile} />
          </Switch>
          <Navigation />
        </Main>
      )}

      {!authenticatedUser && (
        <>
          <Route exact path="/" component={Start} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </>
      )}
    </>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 100px;
`;
