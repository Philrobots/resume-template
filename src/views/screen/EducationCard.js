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

export default ({data}) => (
    <Col lg="6" style={{ display: "flex",justifyContent:"center"}}>
      <Card style={{height: 400, width:400}} className="card-lift--hover shadow border-0">
        <CardBody className="py-3">
          <img
            width={60}
            height={50}
            src={require(`../../assets/img/${data.image}`)}/>
          <h4>{data.name}</h4>
          <p className="description mt-2 ml-0.2">{data.program}</p>
          <div>
            <Badge color="secondary big" pill className="mr-1">
              {data.date}
            </Badge>
          </div>
        
        </CardBody>
      </Card>
    </Col>
  );
