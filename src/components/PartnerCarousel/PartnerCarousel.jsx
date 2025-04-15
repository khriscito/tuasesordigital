// PartnerCarousel.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Para los botones de navegación
import { Styles } from '../../styles/styles';
import partners from './PartnerData';  // Importamos los datos de aliados comerciales

// Configuración del carrusel
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1, // Muestra una tarjeta por defecto
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // Muestra dos tarjetas a partir de 1024px
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // Una tarjeta en pantallas pequeñas
      },
    },
  ],
};

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mover al siguiente aliado
  const nextPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  // Función para mover al aliado anterior
  const prevPartner = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );
  };

  // Configuración de autoplay
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextPartner();
    }, settings.autoplaySpeed);

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <>
      <Styles /> {/* Asegúrate de aplicar los estilos globales */}
      <div className="carousel-container">
      <h6>Aliados Comerciales</h6>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Desplazamiento para mostrar el aliado actual
            }}
          >
            {partners.map((partner, index) => (
              <div className="carousel-item" key={index}>
                <img
                  className="carousel-image"
                  src={partner.image}
                  alt={partner.name}
                />
                <h3>{partner.name}</h3>
                <p>Real Seguros, S.A es una empresa regulada por la Superintendencia de la Actividad Aseguradora en Venezuela. Cuenta con sólidos procesos y manuales para la administración de riesgos, de legitimación de capitales, financiamiento al terrorismo y proliferación de armas de destrucción masiva.</p>
              </div>
            ))}
          </div>
          {/* Botones de navegación */}
          <button
            className="carousel-nav-button carousel-nav-button-left"
            onClick={prevPartner}
          >
            <FaArrowLeft />
          </button>
          <button
            className="carousel-nav-button carousel-nav-button-right"
            onClick={nextPartner}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default PartnerCarousel;
