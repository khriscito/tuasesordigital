import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import styled from "styled-components";
import {
  FooterSection,
  Para,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  label: string;
  backgroundColor: string;
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;  // Asegura que el texto quede alineado a la izquierda en pantallas grandes

  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

const LanguageStyled = styled(Language)`
  font-size: 1.8rem;

  @media (max-width: 992px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

const ParaStyled = styled(Para)`
  font-size: 1.5rem;

  @media (max-width: 992px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 576px) {
    font-size: 1.rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-start;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const AttributionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #555;
`;

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src, label, backgroundColor }: SocialLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: label === "WhatsApp" ? "50px" : "40px",
        height: label === "WhatsApp" ? "50px" : "40px",
        borderRadius: "50%",
        backgroundColor: backgroundColor,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <SvgIcon
        src={src}
        width={label === "WhatsApp" ? "50px" : "40px"}
        height={label === "WhatsApp" ? "50px" : "40px"}
      />
    </a>
  );

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="center">
            <Col lg={10} md={16} sm={24} xs={24}>
              <ContactWrapper>
                <LanguageStyled>{t("Contáctanos")}</LanguageStyled>
                <ParaStyled>{t(`Comunicaté con nosotros`)}</ParaStyled>
                <IconWrapper>
                  <SocialLink
                    href="https://wa.me/+584124431231"
                    src="WS.avif"
                    label="WhatsApp"
                    backgroundColor="#128C7E"
                  />
                  <SocialLink
                    href="https://www.instagram.com/soyadolfocolina/"
                    src="IG.avif"
                    label="Instagram"
                    backgroundColor="#C13584"
                  />
                  <SocialLink
                    href="https://www.tiktok.com/@soyadolfocolina"
                    src="TT.avif"
                    label="TikTok"
                    backgroundColor="#010101"
                  />
                </IconWrapper>
              </ContactWrapper>
            </Col>
          </Row>
        </Container>
      </FooterSection>

      <AttributionWrapper>
          Página diseñada por: {" "}
          <a
            href="https://www.instagram.com/solveitvzla"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#128C7E", fontWeight: "bold" }}
          >
            SolveIT Venezuela{" "}
            <SvgIcon src="SIT.avif" width="20px" height="20px" />
          </a>
      </AttributionWrapper>
    </>
  );
};

export default withTranslation()(Footer);







