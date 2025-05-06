import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Styles } from '../../styles/styles';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const imageList = [
  '/img/svg/AC1.avif',
  '/img/svg/AC2.avif',
  '/img/svg/AC3.avif',
  '/img/svg/AC4.avif',
  '/img/svg/AC5.avif',
  '/img/svg/AC6.avif',
  '/img/svg/AC7.avif',
  '/img/svg/AC8.avif',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel-container" style={{ marginTop: '2rem' }}>
      <h6>Nuestras Tarifas</h6>
        <div className="carousel-wrapper" >
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageList.map((src, index) => (
              <div className="carousel-item" key={index} style={{ justifyContent: 'center' }}>
                <img
                  className="carousel-image-only"
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsOpen(true);
                  }}
                  style={{ cursor: 'zoom-in' }}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-nav-button carousel-nav-button-left"
            onClick={prevImage}
          >
            <FaArrowLeft />
          </button>
          <button
            className="carousel-nav-button carousel-nav-button-right"
            onClick={nextImage}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Lightbox para mostrar imagen en pantalla completa */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={imageList.map((src) => ({ src }))}
      />
    </>
  );
};

export default ImageCarousel;

