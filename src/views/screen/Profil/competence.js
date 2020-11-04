import React from "react";

import { Col } from "reactstrap";

export default ({ name, competence }) => (
  <Col lg="3">
    <h6>{name}</h6>
    {
        competence.map(item => (
            <p> - {item} </p>
        ))
    }
  </Col>
);
