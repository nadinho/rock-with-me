import React from "react";
import TabNavigation from "../components/TabNavigation";
import { Home, Konzerte, Messages, Profil } from "../assets/icons/Icons";

export default {
  title: "Tab bar navigation",
  component: "TabNavigation",
};

export const Default = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("Home");
  return (
    <TabNavigation
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
