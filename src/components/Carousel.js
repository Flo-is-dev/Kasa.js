import React, { useState } from "react";

const Carousel = ({ data }) => {
  const dataphoto = data[4]?.pictures || [];
  console.log(dataphoto);

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % dataphoto.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? dataphoto.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <img src={dataphoto[currentPhotoIndex]} alt="" />

      <button onClick={prevPhoto}>Précédent</button>
      <button onClick={nextPhoto}>Suivant</button>
      <div>{`${currentPhotoIndex + 1}/ ${dataphoto.length}`}</div>
    </div>
  );
};

export default Carousel;
