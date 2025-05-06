import { Collapse} from 'antd';
import { StyledButton } from '../../common/Button/styles';
import styled from "styled-components";

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
    question: "¿Que cubren los RCV",
    answer: "Nuestros RCV cubren: (los montos variarán dependiendo del plan elegido), Daño a cosas, Daño a personas, Cobertura de exceso, Gastos por asistencia legal,Muerte Gastos médicos, Gastos extras, Estacionamiento"
  },
  {
    question: "¿Por cuanto tiempo es la vigencia del RCV?",
    answer: "La vigencia del RCV es por un año"
  },
  {
    question: "¿Por que la RCV esta en Euros",
    answer: "TCR significa, Tipo de Cambio Referencial oficial de la moneda de mayor valor, publicado por el Banco Central de Venezuela, según el promedio resultante de las operaciones diarias de las mesas de cambio. Actualmente un TCR, equivale a un Euro. En esa unidad TCR, están establecidas las coberturas y primas de la Póliza de RCV."
  },
  {
    question: "¿Las coberturas son nacionales?",
    answer: "Si, nuestras pólizas R.C.V tienen cobertura a nivel nacional"
  },
  {
    question: "¿En cuanto tiempo se genera la póliza R.C.V?",
    answer: "Desde el momento que nos confirma la adquisición de su RCV, toma 10 min aproximadamente en estar listo."
  },
  {
    question: "¿En que moneda puedo pagar mi RCV?",
    answer: "Si,puede pagar en dolares, o en bolívares a tasa B.C.V"
  },
  {
    question: "¿A quien debo llamar en caso de accidente?",
    answer: "En caso de un siniestro deberás llamar a la aseguradora, los números de telefono por aseguradora son los siguientes:"
  },
  {
    question: "¿Si el vehículo no es mío debo sacar un R.C.V?",
    answer: "Si, legalmente cada persona que maneje un vehiculo debe tener un RCV así no sea el propietario"
  },
  {
    question: "¿El R.C.V incluye servicio de grua?",
    answer: "El plan básico no incluye grua sin embargo puede adquirir nuestros planes que incluyen grua"
  },
  {
    question: "¿El R.C.V cubre a mi carro?",
    answer: "No, el R.C.V cubre al contratante (persona que maneja el vehículo)"
  },
  {
    question: "¿Como puedo renovar mi R.C.V?",
    answer: "Cuando se acerque la fecha de vencimiento y cuando ya esté vencido tu RCV, nuestro equipo te contactará renovarlo.Igualmente cualquier consulta y/o recomendación puedes contactarnos a través de los multiples canales que tenemos disponibles."
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
  
        <div
  style={{
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>
    Ahora ya estás listo para Emitir tu Póliza
  </h3>
  <StyledButton onClick={handleRedirect}>
    ¡Emite tu póliza!
  </StyledButton>
</div>

      </div>
    );
  };
  
  export default FAQ;
