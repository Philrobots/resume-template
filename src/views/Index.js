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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import Education from "./screen/Education/Education";
import WorkExperience from "./screen/Work/WorkExperience";
import Projet from "./screen/Project/Projects";
import Profile from "./screen/Profil/userProfile";
import DemoFooter from "../components/Footers/DemoFooter";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <Profile />
        <Education />
        <WorkExperience />
        <Projet />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
