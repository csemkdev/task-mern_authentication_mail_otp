import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlertsView from "./components/AlertsView";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SensitiveInfo from "./components/SensitiveInfo";

class App extends Component {
  state = {
    successMessages: [],
    errorMessages: []
  };

  handleAddErrorMessages = errors => {
    this.setState({ errorMessages: [...this.state.errorMessages, ...errors] });
  };

  handleAddSuccessMessage = successMessage => {
    this.setState({
      successMessages: [...this.state.successMessages, { msg: successMessage }]
    });
  };

  handleDismissErrorMessage = index => {
    const errorMessages = [...this.state.errorMessages];
    errorMessages.splice(index, 1);
    this.setState({ errorMessages: [...errorMessages] });
  };

  handleDismissSuccessMessage = index => {
    const successMessages = [...this.state.successMessages];
    successMessages.splice(index, 1);
    this.setState({ successMessages: [...successMessages] });
  };

  render() {
    return (
      <div className="container">
        <AlertsView
          successMessages={this.state.successMessages}
          errorMessages={this.state.errorMessages}
          handleDismissSuccessMessage={this.handleDismissSuccessMessage}
          handleDismissErrorMessage={this.handleDismissErrorMessage}
        />
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login
                handleAddErrorMessages={this.handleAddErrorMessages}
                handleAddSuccessMessage={this.handleAddSuccessMessage}
              />
            </Route>
            <Route exact path="/signup">
              <Signup
                handleAddErrorMessages={this.handleAddErrorMessages}
                handleAddSuccessMessage={this.handleAddSuccessMessage}
              />
            </Route>
            <Route exact path="/">
              <SensitiveInfo
                handleAddErrorMessages={this.handleAddErrorMessages}
                handleAddSuccessMessage={this.handleAddSuccessMessage}
              />
            </Route>
            <Route path="*">
              <Login
                handleAddErrorMessages={this.handleAddErrorMessages}
                handleAddSuccessMessage={this.handleAddSuccessMessage}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;