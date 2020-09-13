

/* eslint-disable */
import React, { Component, Fragment } from "react";
import './signin.css';
import Route from "../../route";
import PropTypes from "prop-types";
import HeaderData from "../Header/header";
import Select from "react-select";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
export default class signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
    // this.handleSubmit = this.handleSubmit.bind(this);

  }
 

  render() {
    console.log("props", this.props);
    return (
    
        <div className="divform">
         
          <table>
           
            <tr>
              <td>
                <label className="common">
                  Name:
            </label>
              </td>
              <td>
                <input type="text" 
                className="common"
                //   value={this.state.displayName}
                //   onChange={e => {
                //     this.setState({ displayName: e.target.value });
                //   }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className="common">
                  Password:
            </label>
              </td>
              <td>
                <input type="text" 
                className="common"
                //   value={this.state.emailId}
                //   onChange={e => {
                //     this.setState({ emailId: e.target.value });
                //   }}
                />
              </td>
            </tr>
            
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Start Chat" 
                className="startbutton"
                //   onClick={this.handleSubmit}
                />
              </td>
            </tr>
          </table>
        </div>
    );
  }

}
