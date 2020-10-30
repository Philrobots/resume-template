import React from "react";

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const isMobile = (!!navigator.userAgent.match(/iphone|android|blackberry/gi) || false);


export default ({ name, data, onClick }) => (
  <UncontrolledDropdown nav>
    <DropdownToggle
      caret
      color="default"
      href="#pablo"
      nav
      onClick={(e) => e.preventDefault()}
    >
      <p>{name}</p>
    </DropdownToggle>
    <DropdownMenu>
      {data.map((item) => (
        <DropdownItem onClick={()=> scrollToFunction(item.computerScroll, item.mobileScroll)}>
          <i className={item.icon}></i>
          {item.name}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
);

const scrollToFunction = (computer, mobile) => {
  if (isMobile) {
    scroll.scrollTo(mobile);
  } else {
    scroll.scrollTo(computer);
  }
};

