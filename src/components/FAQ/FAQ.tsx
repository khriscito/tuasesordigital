import { Collapse} from 'antd';
import styled from "styled-components";
import { Button } from '../../common/Button';

const { Panel } = Collapse;


export const StyledPanel = styled(Panel)`

  background: #a2d1e5;
  border-radius: 10px !important;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  .ant-collapse-header {
    font-size: 18px;
    font-weight: 600;
    color: #2e186a;
    padding: 1rem 1.5rem !important;
    transition: background 0.3s ease;
  }

  .ant-collapse-header:hover {
    background-color: #f5f5f5;
  }

  .ant-collapse-content-box {
    padding: 1rem 1.5rem;
    font-size: 16px;
    line-height: 1.6;
    color: #555;
    background-color: #fafafa;
  }
`;

const faqData = [
  {
    question: "¿Qué cubren los RCV?",
    answer: "Nuestros RCV cubren: (los montos variarán dependiendo del plan elegido), daño a cosas, daño a personas, cobertura de exceso, gastos por asistencia legal, muerte, gastos médicos, gastos extras, estacionamiento."
  },
  {
    question: "¿Cuáles son los recaudos que necesito para adquirir un RCV?",
    answer: "Solo necesitas tu cédula de identidad vigente, título de vehículo o carnet de circulación, o factura de compra y certificado de origen si el vehículo es nuevo o no está registrado."
  },
  {
    question: "¿Qué significa APOV?",
    answer: "Las siglas refieren a Accidentes Personales a Ocupantes de Vehículos y nos cubre una suma mínima de $500 dólares contra reembolso para gastos médicos, en caso de causarle daño en un choque a los ocupantes de nuestro vehículo."
  },
  {
    question: "El carro no está a mi nombre, ¿puedo comprar la RCV?",
    answer: "La RCV es del vehículo y no de la persona, y la póliza saldrá a nombre de quien aparece como dueño y tú aparecerás como contratante y conductor habitual. Sin inconvenientes, esto es perfectamente legal. Cuando tengas el compra-venta se puede modificar, en cualquier momento."
  },
  {
    question: "Tengo un RCV que está vigente, ¿cómo podría saber si es válida?",
    answer: "Debes verificar si la aseguradora o ente emisor de la póliza está regulado, para ello debes ir a la página de: www.sudeaseg.gob.ve en el apartado de sujetos regulados y podrás buscar por nombre la compañía que te emitió la póliza."
  },
  {
    question: "Tengo un RCV que está vigente, ¿puedo esperar a su vencimiento?",
    answer: "Sí, siempre y cuando la empresa emisora del contrato esté regulada y aprobada ante la Sudeaseg, de no cumplir con la normativa puedes incurrir en multas. Sin embargo, lo más importante es no tener cobertura real frente a un choque o arrollamiento."
  },
  {
    question: "En caso de un choque, ¿cómo activo el RCV?",
    answer: "Si el asegurado es responsable del choque o arrollamiento, este y el tercero deben esperar a tránsito, gestionar el expediente, comunicarse con la empresa de seguro y su asesor de seguros (Nosotros) para solicitar la reclamación, la aseguradora emitirá una indemnización de acuerdo a los daños a nombre del tercero, pagaderos en un lapso de 30 días."
  },
  {
    question: "¿Cómo funciona la defensa penal?",
    answer: "Con una llamada telefónica a la empresa de seguros, se solicita el servicio de defensa penal y la empresa asignará un abogado que te asistirá y representará físicamente en caso de una detención de forma inmediata."
  },
  {
    question: "Tengo un vehículo especial, ¿cómo puedo saber el precio del RCV?",
    answer: (
      <>
        Puedes escribir a nuestro{" "}
        <a
          href="https://wa.me/584124431231"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25d366", // Color verde característico de WhatsApp
            fontWeight: "bold",
            textDecoration: "underline",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#128c7e"} // Cambio de color al pasar el mouse
          onMouseOut={(e) => e.currentTarget.style.color = "#25d366"} // Restaurar el color original
          onClick={(e) => e.currentTarget.style.transform = "scale(1.05)"} // Efecto de escala
        >
          WhatsApp
        </a>
        , con marca, modelo y año del vehículo para hacerte una cotización personalizada.
      </>
    ),
  },
  {
    question: "¿Por qué estas RCV funcionan y las otras no?",
    answer: "Porque esta empresa se encuentra regulada por la Sudeaseg, lo que nos brinda una mayor solidez y confianza. Adicional, determinaron sumas aseguradas aceptables (en divisas) que permiten al asegurado enfrentar los daños de choques o arrollamientos causados a un tercero. Antes las sumas aseguradas eran muy bajas en bolívares, mientras que las RCV actuales son más acordes a la realidad"
  },
  {
    question: "El proceso para adquirir la RCV, ¿puede ser online o debo de ir personalmente?",
    answer: "Puedes adquirir tu RCV sin movilizarte por medio de nuestro CANAL DIGITAL, el cual está perfectamente respaldado y autorizado por la Sudeaseg y la aseguradora Real Seguros, nuestra intención es dar un servicio digital a nivel nacional rápido, fácil y confiable."
  },
  {
    question: "¿Las nuevas RCV son obligatorias?",
    answer: "Sí, son obligatorias a nivel nacional, según la Ley de tránsito terrestre, según el artículo 58."
  },
  {
    question: "¿Cuál es la compañía de seguros que recomiendas?",
    answer: "Trabajamos directamente con Real Seguros."
  },
  {
    question: "¿Puedo pagar la RCV financiada?",
    answer: "Solamente se puede financiar a partir de los vehículos livianos que están en 33, 39 y 45 euros de manera semestral, los vehículos que superan los 75 euros en adelante, se pueden financiar de manera trimestral y semestral. En el caso de las MOTOS que son 15 euros NO SON FINANCIABLES."
  },
  {
    question: "Al adquirir mi RCV, ¿me entregan un carnet?",
    answer: "No todas las compañías manejan el formato tipo carnet, sin embargo, lo más importante es el cuadro póliza con el sello pagado, el cual debes guardar en el vehículo (La póliza de Real Seguros sí te entrega un carnet)"
  },
  {
    question: "¿La RCV debe tener un QR?",
    answer: "La ley no lo establece, no exige un QR en las RCV. (En nuestras pólizas de Real Seguros sí tenemos un código QR)."
  },
  {
    question: "¿Por cuánto tiempo es la vigencia del RCV?",
    answer: "La vigencia del RCV es por un año."
  },
  {
    question: "¿Por qué la RCV está en Euros?",
    answer: "Debido a que el estado venezolano decreta, en la gaceta oficial extraordinaria número #6.835 publicada en septiembre del 2024, las nuevas normas y tarifas para la póliza de responsabilidad civil vehicular (RCV) en Venezuela. Esta gaceta oficial establece el pago de las pólizas RCV. en TCR; TCR significa, Tipo de Cambio Referencial oficial de la moneda de mayor valor, publicado por el Banco Central de Venezuela, según el promedio resultante de las operaciones diarias de las mesas de cambio. Actualmente un TCR equivale a un Euro. En esa unidad TCR, están establecidas las coberturas y primas de la Póliza de RCV."
  },
  {
    question: "¿Las coberturas son nacionales?",
    answer: "Sí, nuestras pólizas RCV. tienen cobertura a nivel nacional."
  },
  {
    question: "¿En cuánto tiempo se genera la póliza RCV?",
    answer: "Desde el momento que nos confirma la adquisición de su RCV, toma 10 min aproximadamente en estar lista."
  },
  {
    question: "¿En qué moneda puedo pagar mi RCV?",
    answer: "Se puede pagar en dólares, o en moneda de curso legal a tasa del B.C.V. del día que se realiza la compra."
  },
  {
    question: "¿Se puede pagar en Bolívares?",
    answer: "Sí, a la tasa del día según el BCV y directamente a la empresa aseguradora Real Seguros."
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer: "Puedes pagar por medio de tarjetas a través del portal, en bolívares y dólares, transferencias bancarias en bolívares y dólares, pago móvil y Zelle."
  },

  {
    question: "¿Por qué emitir tu RCV con nosotros?",
    answer: "Porque necesitas alguien con suficiente conocimiento y experiencia que te explique cómo funciona el contrato, te oriente en caso de choque o arrollamiento las 24/7 y sobre todo te apoye en caso de reclamación. 'Tomar una póliza de seguro sin corredor es como saltar de un avión sin paracaídas.'"
  },

  {
    question: "¿A quién debo llamar en caso de accidente?",
    answer: "En caso de un siniestro deberás llamar a la aseguradora Real Seguros, el número de teléfono de Real Seguros es el siguiente: 0212-901-25-45."
  },
  {
    question: "Si el vehículo no es mío, ¿debo sacar un RCV?",
    answer: "Sí, legalmente cada persona que maneje un vehículo debe tener un RCV, así no sea el propietario."
  },
  {
    question: "¿El RCV incluye servicio de grúa?",
    answer: "El plan básico no incluye grúa, sin embargo, puedes adquirir nuestros planes que incluyen servicio de grúa aparte."
  },
  {
    question: "¿El RCV cubre a mi carro?",
    answer: "No, el RCV no cubre tu vehículo, cubre los daños que se le causen a un tercero."
  },
  {
    question: "¿Cómo puedo renovar mi RCV?",
    answer: "Cuando se acerca la fecha de vencimiento de tu RCV, nuestro equipo te contactará para renovar tu contrato de póliza. Igualmente, cualquier consulta y/o recomendación puedes contactarnos a través de los múltiples canales que tenemos disponibles en el canal digital."
  },
  {
    question: "¿Qué seguridad tengo yo al momento de pagar?",
    answer: "En Mi Canal Digital no recibimos dinero, sin embargo, te brindaremos todas las herramientas para que puedas efectuar el pago. El pago será siempre directo a la compañía Real Seguros y nosotros validaremos la transferencia por sistema y emitiremos su póliza de manera inmediata. Es importante que, una vez realizado el pago exacto, envíes el comprobante para la emisión de su póliza RCV."
  },
  {
    question: "Tengo un vehículo especial, ¿cómo puedo saber el precio del RCV?",
    answer: (
      <>
        Puedes escribir a nuestro{" "}
        <a
          href="https://wa.me/04124431231"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25d366",
            fontWeight: "bold",
            textDecoration: "underline",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#128c7e"}
          onMouseOut={(e) => e.currentTarget.style.color = "#25d366"}
          onClick={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        >
          WhatsApp
        </a>
        , con marca, modelo y año del vehículo para hacerte una cotización personalizada.
      </>
    ),
  },
  {
    question: "¿Solo trabajan con seguros de vehículos?",
    answer: (
      <>
        No, soy corredor de seguros regulado, aprobado por la Sudeaseg para trabajar todos los ramos. Trabajo con: pólizas de salud, cobertura de emergencias médicas, pólizas de accidentes personales. Para cotizar puedes escribir al{" "}
        <a
          href="https://wa.me/04124431231"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25d366",
            fontWeight: "bold",
            textDecoration: "underline",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#128c7e"}
          onMouseOut={(e) => e.currentTarget.style.color = "#25d366"}
          onClick={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        >
          WhatsApp
        </a>
      </>
    ),
  },
  {
    question: "¿También ofrecen cobertura amplia?",
    answer: (
      <>
        Sí, trabajamos con coberturas amplias que incluyen pérdidas parciales, pérdidas totales, robos de vehículos y la RCV. +básica defensa penal +APOV y Grúa. Para cotizar debes escribir al {" "}
        <a
          href="https://wa.me/04124431231"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25d366",
            fontWeight: "bold",
            textDecoration: "underline",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#128c7e"}
          onMouseOut={(e) => e.currentTarget.style.color = "#25d366"}
          onClick={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        >
         WhatsApp 
        </a>
        {" "}con la marca, modelo y año y tus datos personales: Nombre completo, número de cédula de identidad y fecha de vencimiento.
      </>
    ),
  },
  {
    question: "¿Tienes alguna duda o inquietud?",
    answer: (
      <>
        Escribe a nuestro teléfono{" "}
        <a
          href="https://wa.me/04124431231"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25d366",
            fontWeight: "bold",
            textDecoration: "underline",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "#128c7e"}
          onMouseOut={(e) => e.currentTarget.style.color = "#25d366"}
          onClick={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        >
          WhatsApp
        </a>
        {" "}y con gusto te atenderemos.
      </>
    ),
  },
];


const FAQ = ({ title, content, id }: { title: string; content: string; id: string }) => {
  const handleRedirect = () => {
    window.open("https://forms.kommo.com/rdwrtdd", "_blank"); // Cambia por tu enlace real
  };

  return (
    <div id={id} style={{ margin: "4rem 0", textAlign: "center" }}>
      <h2>{title}</h2>
      <p>{content}</p>

      <Collapse accordion style={{ textAlign: "left", margin: "2rem auto", maxWidth: "800px" }}>
        {faqData.map((faq, index) => (
          <StyledPanel
            style={{ marginBottom: "2rem" }} 
            header={<span style={{ fontSize: "18px", color: "#000000" }}>{faq.question}</span>}
            key={index}
          >
            <p>{faq.answer}</p>
          </StyledPanel>
        ))}
      </Collapse>

      <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>
          Ahora ya estás listo para Emitir tu Póliza
        </h3>

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
    🚗 Emite tu Póliza
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
    </div>
  );
};
  
  export default FAQ;
