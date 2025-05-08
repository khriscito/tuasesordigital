import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("RCV")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("Documentación")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => window.open("https://forms.kommo.com/rdwrtdd", "_blank")}>
          <Span>{t("Cotiza con Nosotros")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => window.open("https://wa.me/584124431231", "_blank")}
        >
          <Span>
            <Button>{t("Whatsapp")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
      <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="AC.avif" width="100%" height="auto" />
          </LogoContainer>
        <Row justify="space-between">
       
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
          <span style={{ marginRight: "8px", fontWeight: "bold", color: "#2e186a", fontSize: "20px" }}>MENU</span>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
            <Col style={{ marginBottom: "2rem", textAlign: "center" }}>
  <Menu style={{ fontSize: "1.8rem", fontWeight: "bold" }}>MENU</Menu>
</Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
