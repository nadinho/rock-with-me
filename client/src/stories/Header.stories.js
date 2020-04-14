import React from "react";
import PageHeader from "../components/PageHeader";

export default {
  title: "Header",
  component: PageHeader,
};

export const home = () => <PageHeader>Rock with me</PageHeader>;
export const konzerte = () => <PageHeader>Konzerte</PageHeader>;
export const messages = () => <PageHeader>Messages</PageHeader>;
export const profil = () => <PageHeader></PageHeader>;
