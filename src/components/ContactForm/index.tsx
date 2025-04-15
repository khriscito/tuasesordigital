import { useEffect } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { ContactContainer } from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  useEffect(() => {
    const existingScript = document.getElementById("amoforms_script_1449192");
    const existingForm = document.getElementById("amoforms_widget");

    if (existingScript || existingForm) return;

    // Creamos el contenedor que Kommo necesita
    const formContainer = document.createElement("div");
    formContainer.id = "amoforms_widget";
    document.body.appendChild(formContainer);

    // Script inline de configuración
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},
      a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},
      a[o+r]({id:"1449192",hash:"a60fbe42ee30b85da48104154024c46e",locale:"es"}),
      a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
    `;

    // Script externo de Kommo
    const script = document.createElement("script");
    script.src = "https://forms.kommo.com/forms/assets/js/amoforms.js";
    script.id = "amoforms_script_1449192";
    script.async = true;
    script.charset = "utf-8";

    script.onload = () => {
      // Mover el formulario al placeholder visual
      const form = document.getElementById("amoforms_widget");
      const placeholder = document.getElementById("kommo-placeholder");
      if (form && placeholder) {
        placeholder.appendChild(form);
      }
    };

    document.body.appendChild(inlineScript);
    document.body.appendChild(script);

    return () => {
      if (formContainer) formContainer.remove();
      if (inlineScript) inlineScript.remove();
      if (script) script.remove();
    };
  }, []);

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            {/* Este div será donde el script colocará el formulario */}
            <div id="kommo-placeholder" />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);

