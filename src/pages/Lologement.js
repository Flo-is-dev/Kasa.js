import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Lologement = () => {
  // DATA = objet gloable (20)
  let data = require("../data/data.json");

  return (
    <div>
      <Navigation />
      <Carousel data={data} />
      <Footer />
    </div>
  );
};

export default Lologement;
