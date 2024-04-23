import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel.js";
import Information from "../components/Information";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Logement = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("DATA", data);

  //   PARAM = id de la âge voulue
  const { id } = useParams();
  console.log(id, "====PARAM");

  //   filteredData = les informations complètes de PARAM
  let filteredData;

  if (data) {
    filteredData = data.filter((obj) => {
      return obj.id === id;
    })[0];
  }

  console.log("===filteredData===", filteredData);

  return (
    <div>
      <Navigation />
      {!data ? (
        <p>Aucun résultat ne correspond à votre recherche.</p>
      ) : filteredData ? (
        <>
          <Carousel filteredData={filteredData} />
          <Information filteredData={filteredData} />
        </>
      ) : (
        <p>Aucun logement trouvé pour l'ID : {id}</p>
      )}

      <Footer />
    </div>
  );
};

export default Logement;
