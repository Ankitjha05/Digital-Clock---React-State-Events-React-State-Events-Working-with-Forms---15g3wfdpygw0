import "../styles/App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({
        time:new Date()
      })
    },1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div id="main">
        <div className="date-time">{this.state.time.toLocaleString()}</div>
      </div>
    );
  }
}
