import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map((item, id) => (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    ))}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map((item, id) => (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                          {icon === "documentos.avif" && (
  <div style={{ marginBottom: "1rem" }}>
    <Button
      onClick={() => {
        const fileMap: { [key: string]: string } = {
          "Gaceta Oficial": "documents/Gaceta.pdf",
          "Unidades de Medida": "documents/Mediciones.pdf",
        };
        const fileUrl = fileMap[item.title];
        if (fileUrl) {
          const a = document.createElement("a");
          a.href = fileUrl;
          a.download = fileUrl.split("/").pop()!;
          a.click();
        }
      }}
    >
      Descargar
    </Button>
  </div>
)}
                        </Col>
                      ))}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>

      {/* 🚨 Inserción del botón destacado animado aquí */}
      <div style={{ textAlign: 'center', position: 'relative', marginTop: '3rem' }}>
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
          <div style={{ animation: 'bounceSide 1.5s infinite' }}>
            <span style={{ fontSize: '2rem' }}>➡️</span>
          </div>

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

          <div style={{ animation: 'bounceSide 1.5s infinite' }}>
            <span style={{ fontSize: '2rem' }}>⬅️</span>
          </div>
        </div>

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
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);

