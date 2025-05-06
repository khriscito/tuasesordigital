import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from '../../common/Button';

interface VideoProps {
  url: string;
  title?: string;
  local?: boolean;
}

const Video: React.FC<VideoProps> = ({ url, title, local = false }) => {
  return (
    <div className="video-container" >
      {title && <h3 style={{ textAlign: 'center' }}>{title}</h3>}

      <div
        style={{
          position: 'relative',
          paddingTop: '56.25%', // 16:9
          width: '100%',
          height: 0,
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}
      >
        {local ? (
          <video
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          >
            <source src={url} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        ) : (
          <ReactPlayer
            url={url}
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        )}
      </div>

      {/* Sección del botón destacado */}
      <div style={{ textAlign: 'center', position: 'relative' }}>
        {/* Flechas arriba */}
        <div style={{ marginBottom: '0.5rem', animation: 'bounce 1.5s infinite' }}>
          <span style={{ fontSize: '2rem' }}>⬇️⬇️</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {/* Flecha izquierda */}
          <div style={{ animation: 'bounceSide 1.5s infinite' }}>
            <span style={{ fontSize: '2rem' }}>➡️</span>
          </div>

          {/* Botón mejorado */}
          <div
  style={{
    animation: 'pulse 1.5s infinite',
    display: 'inline-block',
    background: 'linear-gradient(90deg, #007bff, #00c6ff)',
    borderRadius: '50px',
    boxShadow: '0 8px 20px rgba(0, 128, 255, 0.4)',
    padding: '0.3rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseOver={(e) => {
    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 25px rgba(0, 128, 255, 0.5)';
  }}
  onMouseOut={(e) => {
    (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 20px rgba(0, 128, 255, 0.4)';
  }}
>
  <Button color="primary" size="large" variant="highlight" onClick={() => window.open("https://forms.kommo.com/rdwrtdd", "_blank")}>
    🚗 Cotiza Ahora
  </Button>
</div>

          {/* Flecha derecha */}
          <div style={{ animation: 'bounceSide 1.5s infinite' }}>
            <span style={{ fontSize: '2rem' }}>⬅️</span>
          </div>
        </div>

        {/* Animaciones CSS */}
        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }

            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-8px); }
            }

            @keyframes bounceSide {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(-8px); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Video;


