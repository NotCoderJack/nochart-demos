import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Line from "./Line";
import MultiLine from "./MultiLine"
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Link to="/line">Line</Link>
          <Link to="multi-line">MultiLine</Link>
          <hr/>
          <Switch>
            <Route path="/line">
              <Line />
            </Route>
            <Route path="/multi-line">
              <MultiLine/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
