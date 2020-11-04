import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Card,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

export default ({ nomLoisir, description, image }) => (
  <li>
    <Row>
      <Col className="ml-auto mr-auto" lg="7" md="12" xs="5">
        <h6 style={{fontSize:15}}>
          {nomLoisir}
        </h6>
           <br />
          <p>{description}</p>
      </Col>
    </Row>
    <hr style={{"width": "60%"}} />
  </li>
);
