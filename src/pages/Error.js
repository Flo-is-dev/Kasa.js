import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Navigation />
      <div className="error-header">
        <div className="logo">
          <img src="./img/404.png" alt="" />
        </div>

        <h1> Oups! La page que vous demandez n'existe pas.</h1>
        <NavLink to="/">
          <p>Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
