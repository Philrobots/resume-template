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
  <Col lg="6">
      <Card style={{width:"80%"}} className="card-lift--hover shadow border-0">
        <CardBody className="py-3">
          <img
            width={60}
            height={50}
            src={require(`../../assets/img/${data.image}`)}/>
          <h3>{data.name}</h3>
          <h5 className="note mt-2 ml-0.2">{data.program}</h5>
          <div>
            <Badge color="secondary big" pill className="mr-1">
              {data.date}
            </Badge>
          </div>
          <h5>
            
          </h5>
        
        </CardBody>
      </Card>
      </Col>
  );
