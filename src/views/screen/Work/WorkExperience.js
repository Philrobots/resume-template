import React, { useState } from "react";
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Container
} from "reactstrap";

import workInformation from "../../../data/workInformation.json";
import WorkCard from "./workCard";

export default function WorkExperience(props) {
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
                <h2>{workInformation.sectionName}</h2>
              </div>
            </Container>
          </div>
        </section>
      </div>
      <section className="section section-lg" style={{"marginTop": isMobile ? -100 : 0}}>
        <Container>
          <div className="justify-content-around row mb-2 mt-2">
            {workInformation.work.map((item) => (
              <WorkCard data={item} isMobile={isMobile} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
