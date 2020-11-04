import React, { Component } from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default ({ data: projet, isMobile }) => (
  <Card
    style={{ width: isMobile ? 350 : 450 }}
    className="card-lift--hover shadow border-0"
  >
    <CardBody className="py-3">
      <img
        width={60}
        height={50}
        src={require(`../../../assets/img/${projet.image}`)}
      />
      <h3>{projet.projetName}</h3>
      <h5 className="note mt-2 ml-0.2"> {projet.organisation}</h5>
      <div>
        <Button
          className="btn-round mt-1 mb-1"
          color="default"
          type="button"
          size="sm"
        >
          {projet.date}
        </Button>
      </div>
      {
          projet.description !== "" &&
          <p className="mt-2">
               {projet.description}
          </p>
      }
      {
          projet.implication.length && projets(projet.implication)
      }
    </CardBody>
  </Card>
);

function projets(projets) {
  return (
    <div>
      <h6 className="mt-2">Implications</h6>
      {projets.map((implication) => (
        <p className="mt-1 mb-1"> - {implication.name} </p>
      ))}
    </div>
  );
}
