import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
   pageSize=10
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            {/* exact and key se hm different categories me jump kr skty hen */}
            <Route exact path="/">
              <News
                Key="general"
                pageSize={this.pageSize}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                Key="business"
                pageSize={this.pageSize}
                country="us"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                Key="entertainment"
                pageSize={this.pageSize}
                country="us"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                Key="general"
                pageSize={this.pageSize}
                country="us"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News Key="health" pageSize={this.pageSize} country="us" category="health" />
            </Route>
            <Route exact path="/science">
              <News
                Key="science"
                pageSize={this.pageSize}
                country="us"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News Key="sports" pageSize={this.pageSize} country="us" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News
                Key="technology"
                pageSize={this.pageSize}
                country="us"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
