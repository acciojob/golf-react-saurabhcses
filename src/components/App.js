import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" },
    };
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });

    // Add keydown listener once ball appears
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        // Move right by 5px
        this.setState((prevState) => {
          const currentLeft = parseInt(prevState.ballPosition.left, 10);
          return {
            ballPosition: { left: currentLeft + 5 + "px" },
          };
        });
      }
    });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      // Make sure button has class="start"
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
