import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Para los botones de navegación
import { Styles } from '../../styles/styles';
import testimonials from './TestimonialData'; 

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


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mover al siguiente testimonio
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Función para mover al testimonio anterior
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Configuración de autoplay
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      nextTestimonial();
    }, settings.autoplaySpeed); // Usamos el autoplaySpeed de settings

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <>
      <Styles />
      <div className="carousel-container">
      <h6>Testimonios de éxito</h6>
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="carousel-item" key={index}>

                <img
                  className="carousel-image"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.title}</p>
                <p>{testimonial.message}</p>
              </div>
            ))}
          </div>
          {/* Botones de navegación */}
          <button
            className="carousel-nav-button carousel-nav-button-left"
            onClick={prevTestimonial}
          >
            <FaArrowLeft />
          </button>
          <button
            className="carousel-nav-button carousel-nav-button-right"
            onClick={nextTestimonial}
          >
            <FaArrowRight />
          </button>
        </div>
        {/* Dots de navegación */}
        {settings.dots && (
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TestimonialCarousel;




