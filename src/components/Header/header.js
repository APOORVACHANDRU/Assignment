/* eslint-disable react/jsx-closing-tag-location */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.css";
const header = ({
  headerTitle,
  menu,
}) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div>
        <div className="header">
        <div style={{ flex: 1 , height:"100px" }}>
          <img style={{width:"40%",height:"80%"}} src="https://s3-us-west-2.amazonaws.com/website.rubicon/assets/CubytMetrology-platform-logo-final.svg"></img>
       </div>
       <div style={{paddingRight: 10}}>
       <button>Signin</button>
       </div>
          </div>
      </div>
      <div>
      <div className="navbar">
        {menu &&
          menu.map((x, index) => (
            <div key={index} className="dropdown">
              <button type="button" className="dropbtn">
                {x.subNav ? (
                  <button type="button" className="dropbtn">
                    {x.nav}
                  </button>
                ) : (
                    <Link to={x.link}>{x.nav}</Link>
                  )}
              </button>
              <div className="dropdown-content">
                {x.subNav &&
                  x.subNav.map((y, index1) => (
                    <Link key={index1} to={y.link}>
                      {y.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
      </div>
      </div>
    
     
    </div>
  );
header.propTypes = {
  headerTitle: PropTypes.string,
  menu: PropTypes.array,
  auth: PropTypes.string,
};
header.defaultProps = {
  headerTitle: "",
  menu: "",
  auth: "",
};
export default header;
