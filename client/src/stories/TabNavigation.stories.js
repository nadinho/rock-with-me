import React from "react";
import TabNavigation from "../components/TabNavigation";
import {
  HomeIcon,
  KonzerteIcon,
  MessagesIcon,
  ProfilIcon,
} from "../assets/icons/Icons";

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
  );
};
