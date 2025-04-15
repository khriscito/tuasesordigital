import React from 'react';
import Player from 'react-player';
import { Button } from '../../common/Button'; // Asegúrate que esta ruta sea correcta

interface VideoProps {
  url: string;
  title?: string;
}

const Video: React.FC<VideoProps> = ({ url, title }) => {
  return (
    <div className="video-container">
      {title && <h3>{title}</h3>}
      <div className="video-wrapper">
        <Player url={url} controls width="100%" height="100%" />
      </div>

      {/* Botón Cotiza Ahora */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Button color="primary" size="large" onClick={() => window.open("https://forms.kommo.com/rdwrtdd", "_blank")}>
          Cotiza Ahora
        </Button>
      </div>
    </div>
  );
};

export default Video;
