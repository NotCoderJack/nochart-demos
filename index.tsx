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
        <h3>选择图表类型，查看示例及自定义渲染</h3>
        <Router>
          <Link className="link" to="/line">Line</Link>
          <Link className="link" to="multi-line">MultiLine</Link>
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
