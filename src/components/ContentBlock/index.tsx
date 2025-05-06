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
            {/* Botón de descarga si es el bloque de documentos */}
            {icon === "documentos.avif" && (
              <Button
                  onClick={() => {
                  const fileMap: { [key: string]: string } = {
                    "Gaceta Oficial": "documents/Gaceta.pdf",
                    "Unidades de Medida": "documents/Mediciones.pdf",
                    "Providencia": "documents/Providencia.pdf",
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
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
