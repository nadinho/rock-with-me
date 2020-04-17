import React from "react";
import TabBar from "../components/TabBar";
import { Home } from "../assets/icons/Home";

export default {
  title: "Tab bar navigation",
  component: "TabBar",
};

export const Default = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("Konzerte");
  return (
    <TabBar
      links={[
        {
          label: "Home",
          Icon: Home,
        },
        {
          label: "Konzerte",
          Icon: Home,
        },
        {
          label: "Messages",
          Icon: Home,
        },
        {
          label: "Profil ",
          Icon: Home,
        },
      ]}
      value={activeNavItem}
      onItemClick={(item) => setActiveNavItem(item)}
    />
  );
};
