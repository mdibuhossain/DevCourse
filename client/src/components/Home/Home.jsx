import React from "react";
import "./Home.css";
import DisplayService from "../DisplayService/DisplayService";
import MiddleHero from "../MiddleHero/MiddleHero";
import MainHero from "../MainHero/MainHero";
import PageLayout from "../../pages/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <MainHero />
      <MiddleHero />
      <DisplayService />
    </PageLayout>
  );
};

export default Home;
