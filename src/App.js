import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";                      // Router 
import Route from "../src/route";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Router>
        <div>
          <Route />               {/*Calls route.js component*/}
         
        </div>
      </Router>
    );
  }
}

export default App;
