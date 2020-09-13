

/* eslint-disable */
import React, { Component, Fragment } from "react";
import './dashboard.css';
import Route from "../../route";
import PropTypes from "prop-types";
import HeaderData from "../Header/header";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import data from "../../data/data.json";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
    this.handleclick = this.handleclick.bind(this);

  }
  componentDidMount() {
    // I will use fake api from jsonplaceholder website
    // this return 100 posts 
    fetch("https://www.cubyt.io/data/categories")
      .then(response => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },

        // Handle error 
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      )
  }
  handleclick() {
    this.props.history.push({
      pathname: '/signin'
    });
  }
  newData(data) {
    return data.map((data) => {
      return (
        <div class="group" onclick={this.handleclick} style={{ cursor: "pointer" }}>
          <div class="grid-containergroup" key={data.category_name}>
            <div class="item2group">
              <div>
                <img className="image" src="https://react.semantic-ui.com/images/wireframe/image.png"></img>
              </div>
            </div>
            <div class="item3group" onClick={this.handleclick}>{data.display_name}</div>
            <div class="item4group"></div>
          </div>
        </div>)

    })
  }


  render() {
    const { error, isLoaded, posts } = this.state;
    return (
      <div>
        <HeaderData
          headerTitle={"Cubyt"}
          menu={[
            {
              nav: 'Community',
              subNav: [{
                name: 'Coming Soon',
                link: '/'
              }]
            },
            {
              nav: 'Learn',
              subNav: [{
                name: 'Coming Soon',
                link: '/'
              }]
            },
            {
              nav: 'About',
              subNav: [{
                name: 'Coming Soon',
                link: '/'
              }]

            },
          ]}

        />

        <div class="grid-container">
          <div class="item2"></div>

          <div class="item3">
            <div>
              <form className="example" style={{ margin: "auto", maxWidth: "700px" }}>
                <input type="text" placeholder="Search.."
                />
                <button type="submit" onClick={this.handleclick}><i className="fa fa-search"></i></button>
              </form>
            </div>
            <div>
              <div>
                {posts.map((data) =>
                  (
                    <div class="group" onclick={this.handleclick} style={{ cursor: "pointer" }}>
                      <div class="grid-containergroup">
                        <div class="item2group">
                          <div>
                            <img className="image" src="https://react.semantic-ui.com/images/wireframe/image.png"></img>
                          </div>
                        </div>
                        <div class="item3group" onClick={this.handleclick}>{data.display_name}</div>
                        <div class="item4group"></div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div class="item4"></div>
        </div>



      </div>

    );
  }

}
