import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
const Actions = React.lazy(() => import('./Actions'))
const Info = React.lazy(() => import('./Info/index'))


export default class App extends Component {
  state = {
    maxIntervalTime: 10,
    intervalTime: 0,
  };

  componentDidMount() {
    console.log(window.location.href);
    this.interval = setInterval(() => {
      this.setState((prev) => {
        return { intervalTime: prev.intervalTime + 1 };
      });
    }, 10000);
  }

  componentDidUpdate() {
    if (this.state.intervalTime === this.state.maxIntervalTime) {
      this.resetIntervalTime();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  resetIntervalTime = () => {
    this.setState({ intervalTime: 0 });
  };
  render() {
    const { intervalTime, maxIntervalTime } = this.state;
    if (intervalTime === maxIntervalTime && window.location.href !== "http://localhost:3000/") {
      return <Redirect to="/" />;
    }
    return (
      <div onClick={this.resetIntervalTime} style={{ background: "radial-gradient(circle, #ffffff , #b7c0c9)", minHeight: '100vh' }}>
        <Switch>
          <Route path="/" render={() => <HomePage />} exact />
          <Route path="/action/:id" exact render={() => <Actions />} />
          <Route path="/action/:actionId/info/:infoId" render={() => <Info />} />
        </Switch>
      </div >
    );
  }
}
