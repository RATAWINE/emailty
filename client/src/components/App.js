import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import { Landing } from "./Landing";

const Dashboard = () => <h2>Dashboard Page</h2>;
const SurveyNew = () => <h2>SurveyNew Page</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </div>
    );
  }
}
export default connect(null, actions)(App);
