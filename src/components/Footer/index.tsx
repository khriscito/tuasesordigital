import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import styled from "styled-components";
import {
  FooterSection,
  Para,
  Empty,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  label: string;
  backgroundColor: string;
}

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src, label, backgroundColor }: SocialLinkProps) => {
    return (
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
        <SvgIcon src={src}   width={label === "WhatsApp" ? "50px" : "40px"}
  height={label === "WhatsApp" ? "50px" : "40px"} />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contáctanos")}</Language>
              <Para>{t(`Comunicaté con nosotros`)}</Para>
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
            </Col>

            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Dirección")}</Language>
              <Para>Caracas, Venezuela</Para>
              <Para>Adolfo Colina</Para>
              <Para>CCCT</Para>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}></Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);


