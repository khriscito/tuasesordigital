import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #dcebfa;
        overflow-x: hidden;
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;
        text-align: center;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .video-container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
    }

    .video-wrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        overflow: hidden;

        & iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    /* Estilos específicos para el carrusel */
    .carousel-container {
        background: radial-gradient(circle, #a2d1e5, #c1edfa); /* Gradiente */
        padding: 2rem; /* Espaciado alrededor */
        border-radius: 10px; /* Bordes redondeados */
        overflow: hidden; /* Evita que el contenido sobresalga */
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombras */
        transition: background 0.5s ease-in-out; /* Transición suave para el fondo */
    }

    .carousel-container:hover {
        background: radial-gradient(circle, #c1edfa, #a2d1e5); /* Cambio de gradiente en hover */
    }

.carousel-wrapper {
    position: relative;
    width: 100%;
    max-width: 1200px; /* Esto es opcional, puedes ajustarlo según lo necesites */
    margin: 0 auto;
    overflow: hidden; 
}

    .carousel-track {
        display: flex;
        transition: transform 0.5s ease-in-out; /* Animación suave al cambiar de imagen */
    }

.carousel-item {
    flex: 0 0 auto; /* Esto asegurará que las tarjetas no se estiren más allá del tamaño disponible */
    width: 100%; /* Cada tarjeta ocupa el 100% del contenedor */
     background: rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: #ffffff;
        transition: transform 0.3s ease;
          display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

    .carousel-image {
        max-width: 150px;
        height: auto;
        border-radius: 8px; /* Bordes redondeados */
        margin-right: 30px;
    }

    /* Agregar botones de navegación para el carrusel */
    .carousel-nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 18px;
        border-radius: 50%;
    }

    .carousel-nav-button-left {
        left: 10px;
    }

    .carousel-nav-button-right {
        right: 10px;
    }

.carousel-image-only {
  max-width: 100%;
  max-height: 400px;
  border-radius: 12px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
}

`;

