import React from "react";
import TabBar from "../components/TabBar";
import { Home, Konzerte, Messages, Profil } from "../assets/icons/Icons";

export default {
  title: "Tab bar navigation",
  component: "TabBar",
};

export const Default = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("Home");
  return (
    <TabBar
      links={[
        {
          label: "Home",
          Icon: Home,
        },
        {
          label: "Konzerte",
          Icon: Konzerte,
        },
        {
          label: "Messages",
          Icon: Messages,
        },
        {
          label: "Profil ",
          Icon: Profil,
        },
      ]}
      value={activeNavItem}
      onItemClick={(item) => setActiveNavItem(item)}
    />
  );
};
