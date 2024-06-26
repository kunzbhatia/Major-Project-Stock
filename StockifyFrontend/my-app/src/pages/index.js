import React from "react";
import Frontpg from "../components/Frontpg";
import Navbar from "../components/Navbar";
import { homeObjOne } from "../components/Info/data";
import Info from "../components/Info";
import Services from "../components/Services";
const Home = () => {
  return (
    <>
      <Navbar />
      <Frontpg />
      <Info {...homeObjOne} />
      <Services />
    </>
  );
};
export default Home;
