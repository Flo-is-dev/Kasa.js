import React from "react";
import Navigation from "../components/Navigation";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  let data = require("../data/data.json");
  console.log(data);

  return (
    <div>
      <Navigation />
      <main>
        <Header children={<h1>Chez vous, partout et ailleurs</h1>} />
        <div className="logement-card-container">
          <ul>
            {data.map((logement) => {
              return <Card key={logement.id} logement={logement} />;
            })}
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
