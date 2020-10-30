import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import EducationCard from "./EducationCard";
import education from "../../data/education.json";

// reactstrap components
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

class Education extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <Container>
                  <div className="title">
                    <h2>Éducation</h2>
                  </div>
                </Container>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Row className="row-grid">
                  {education.education.map((item) => (
                    <EducationCard data={item} />
                  ))}
                </Row>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Education;
