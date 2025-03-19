import React from "react";
import "./pages.css";
import HomeArticleTiles from "../components/HomeArticleTiles/HomeArticleTiles";
import AboutTile from "../components/AboutTile/AboutTile";
import SidebarAds from "../components/SidebarAds/SidebarAds";


const Home = () => {
  return (
    <div className="home-content">
      <div className="home-main">
        <HomeArticleTiles />
      </div>
      <div className="home-side">
        <AboutTile />
        <SidebarAds />
      </div>
    </div>
  );
};

export default Home;