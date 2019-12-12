import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";


// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {

    return (

      <Router>
        <div>


          {/* <Nav /> */}

            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/profile" component={Profile} />
             
              {/* exact path = "*" component={unknown} */}

            </Switch>
          </div>

          {/* <Footer /> */}

      </Router>

    );
  }
}

export default App;
