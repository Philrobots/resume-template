import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

export default ({ nomLoisir, description, image }) => (
  <Col md="6" className="ml-auto mr-auto">
    <h6>{nomLoisir}</h6>
    <br />
    <p>{description}</p>
    <hr className="w-100" />
  </Col>
);
