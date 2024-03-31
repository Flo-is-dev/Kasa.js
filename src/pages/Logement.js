import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel.js";
import Information from "../components/Information";
import Footer from "../components/Footer";

const Logement = () => {
  // DATA = objet gloable (20)
  let data = require("../data/data.json");

  //   PARAM = id de la âge voulue
  const param = useParams();
  console.log(param, "====PARAM");

  //   filteredData = les informations complètes de PARAM
  const filteredData = data.filter((obj) => {
    return obj.id === param.id;
  })[0];

  console.log("===filteredData===", filteredData);

  return (
    <div>
      <Navigation />
      <Carousel images={filteredData.pictures} />
      <Information />
      <Footer />
    </div>
  );
};

export default Logement;
