import React, { useState } from "react";
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import projetInformation from "../../../data/projetInformation.json";
import ProjectCard from "./projetCard";

export default function Projet(props) {
  const [isMobile, setIsMobile] = React.useState(
    !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false
  );
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            <Container>
              <div className="title">
                <h2>{projetInformation.sectionName}</h2>
              </div>
            </Container>
          </div>
        </section>
      </div>
      <section className="section section-lg pt-lg-0" style={{"marginTop": isMobile ? -100 : 0}}>
        <Container>
          <div className="justify-content-around row mb-2 mt-2">
            {projetInformation.projet.map((item) => (
              <ProjectCard data={item} isMobile={isMobile} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
