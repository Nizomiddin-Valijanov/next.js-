import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page describtion",
  icons: {
    icon: "favicon.ico",
  },
};

const Home: React.FC = () => {
  return <main>This is default</main>;
};

export default Home;
