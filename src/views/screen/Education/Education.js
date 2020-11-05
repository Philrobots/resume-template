import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import EducationCard from "./EducationCard";
import education from "../../../data/education.json";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

class Education extends React.Component {
  state = {
    isMobile:
      !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false,
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <main ref="main">
        <div className="position-relative">
          <section className="section section-lg ">
            <div className="shape shape-style-1 shape-default">
              <Container>
                <div className="title">
                  <h2>{education.sectionName}</h2>
                </div>
              </Container>
            </div>
          </section>
        </div>
        <section className="section section-lg pt-lg-0" style={{"marginTop": this.state.isMobile ? -100 : 0}}>
          <Container>
            <div className="justify-content-around row mb-2 mt-2">
              {education.education.map((item) => (
                <EducationCard data={item} isMobile={this.state.isMobile} />
              ))}
            </div>
          </Container>
        </section>
      </main>
    );
  }
}

export default Education;
