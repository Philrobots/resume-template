/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import profileInformation from "../../../data/profileInformation.json";
import Loisir from "./loisir";
import Competence from "./competence";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const [isMobile, setIsMobile] = React.useState(
    !!navigator.userAgent.match(/iphone|android|blackberry/gi) || false
  );

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <div className="section profile-content">
        <div className="position-relative">
          <section className="section section-lg section-shaped">
            <div className="shape shape-style-1 shape-default">
              <Container>
                <div className="title">
                  <h2> Profile </h2>
                </div>
              </Container>
            </div>
          </section>
        </div>
        <div className="section section-login">
          <Container style={{"marginTop": isMobile ? -80 : 0}}>
            <Card
              className="section profile-content card-lift--hover shadow border-5"
              style={{ backgroundColor: "#fff" }}
            >
              <Container>
                <div className="owner">
                  <div className="avatar">
                    <img
                      alt="..."
                      style={{"heigth": 200, "width": 300}}
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/profilPicAvatar.jpg")}
                    />
                  </div>
                  <div className="name">
                    <h4 className="title" style={{fontSize:30}}>
                      {profileInformation.name} <br />
                    </h4>
                    <h6 className="title" style={{fontWeight:500, fontSize:16}}>
                      {profileInformation.profession}
                    </h6>
                  </div>
                </div>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <p style={{fontWeight:380, fontSize:15}}>{profileInformation.courriel}</p>
                    <p>{profileInformation.telephone}</p>
                    <br />
                  </Col>
                </Row>
                <br />
                <div className="nav-tabs-navigation">
                  <div className="nav-tabs-wrapper">
                    <Nav role="tablist" tabs>
                      <NavItem>
                        <NavLink
                          className={activeTab === "1" ? "active" : ""}
                          onClick={() => {
                            toggle("1");
                          }}
                          style={{fontWeight:400, fontSize:19}}
                        >
                          {profileInformation.loisirs.nomSection}
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={activeTab === "2" ? "active" : ""}
                          onClick={() => {
                            toggle("2");
                          }}
                          style={{fontWeight:400, fontSize:19}}
                        >
                          {profileInformation.competences.nomSection}
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                {/* Tab panes */}
                <TabContent className="following" activeTab={activeTab}>
                  <TabPane tabId="1" id="follows">
                    <Row>
                          {profileInformation.loisirs.loisirs.length > 0 &&
                            profileInformation.loisirs.loisirs.map((loisir) => (
                              <Loisir
                                nomLoisir={loisir.name}
                                image={loisir.picture}
                                description={loisir.description}
                              />
                            ))}
                    </Row>
                  </TabPane>
                  <TabPane className="text-center" tabId="2" id="following">
                    <Row className="justify-content-center">
                      {profileInformation.competences.competence.map((item) => (
                        <Competence
                          competence={item.competence}
                          name={item.name}
                        />
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </Container>
            </Card>
            <div className="col text-center">
              <Button
                href={"mailto:" + profileInformation.courriel + "?subject=Intéressé par votre profil" }
                className="btn-round card-lift--hover shadow border-5 "
                color="warning"
              >
                Contactez-moi !
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
