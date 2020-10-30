import React from "react";
import PropTypes from "prop-types";
const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>Hello Buddy</li>
      </ul>
    </div>
  );
};
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-address-book",
};
export default Navbar;
