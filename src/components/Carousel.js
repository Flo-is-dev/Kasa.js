import React, { useState } from "react";

const Carousel = ({ filteredData }) => {
  const dataphoto = filteredData?.pictures || [];
  //   console.log(dataphoto);

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
      <img className="carousel-img" src={dataphoto[currentPhotoIndex]} alt="" />

      {dataphoto.length > 1 && (
        <>
          <button id="btnLeft" className="carousel-btn-img" onClick={prevPhoto}>
            <img src="/img/Vector.png" alt="" />
          </button>

          <button
            id="btnRight"
            className="carousel-btn-img"
            onClick={nextPhoto}
          >
            <img src="/img/Vector.png" alt="" />
          </button>
          <div className="index-number">{`${currentPhotoIndex + 1}/${
            dataphoto.length
          }`}</div>
        </>
      )}
    </div>
  );
};

export default Carousel;
