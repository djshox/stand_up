import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu1 from "./menu1";
import HomePage from "./HomePage";

import Menu1Photos from "./menu-1/photos";
import Menu2 from "./menu-2";
import Menu1Video from "./menu-1/video";

export default class App extends React.Component {
  state = {
    maxIntervalTime: 10,
    intervalTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prev) => {
        return { intervalTime: prev.intervalTime + 1 };
      });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.intervalTime === this.state.maxIntervalTime) {
      this.resetIntervalTime();
    }
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  resetIntervalTime = () => {
    this.setState({ intervalTime: 0 });
  };

  render() {
    const { intervalTime, maxIntervalTime } = this.state;

    if (intervalTime === maxIntervalTime) {
      return <Redirect to="/" />;
    }

    return (
      <div onClick={this.resetIntervalTime}>
        <Switch>
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/menu1" component={Menu1} exact />
          <Route path="/menu1/photos" component={Menu1Photos} />
          <Route path="/menu1/video" component={Menu1Video} />
          <Route path="/menu2" component={Menu2} />
        </Switch>
      </div>
    );
  }
}
