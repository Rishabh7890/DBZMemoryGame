import React, { Component } from "react";
import cardInfo from "../cards.json";
import "../App.css";

class Game extends Component {
  state = {
    cardInfo: [...cardInfo],
    currentScore: 0,
    highScore: 0
  };

  // method for handling click
  handleClick = cardId => {
    let isCorrect = false;

    const cardInfo = [...this.state.cardInfo];

    cardInfo.forEach(card => {
      if (card.id === cardId) {
        if (!card.clicked) {
          isCorrect = true;
          card.clicked = true;
        }
      }
    });

    isCorrect
      ? this.handleCorrectPick(cardInfo)
      : this.handleIncorrectPick(cardInfo);
  };

  // method for correct pick
  handleCorrectPick = cardInfo => {
    const shuffled = cardInfo.sort(() => 0.5 - Math.random());

    const currentScore = this.state.currentScore + 1;

    var highScore = this.state.highScore;

    if (currentScore > highScore) {
      highScore = currentScore;
    }

    this.setState({
      cardInfo: shuffled,
      currentScore: currentScore,
      highScore: highScore
    });
  };

  // method for incorrect pick to reset score
  handleIncorrectPick = cardInfo => {
    const shuffled = cardInfo.sort(() => 0.5 - Math.random());

    shuffled.forEach(card => (card.clicked = false));

    this.setState({
      cardInfo: shuffled,
      currentScore: 0
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-dark d-flex justify-space-between">
          <span className="navbar-brand mb-0 text-light initText">
            More Character sets coming soon!
          </span>
          <span className="scoreInfo text-light">
            Current Score: {this.state.currentScore} || Your Highest Score:{" "}
            {this.state.highScore}
          </span>
        </nav>
        <div className="jumbotron jumbotron-fluid text-center text-light jumboCust">
          <h1>
            {" "}
            <img
              src="https://user-images.githubusercontent.com/48387296/58568914-20e67e00-8203-11e9-90f8-f7725918a39b.png"
              alt="db"
            />{" "}
            Dragonball Z Memory Clicky Game
          </h1>
          <p>
            Click on a card to start playing! Don't click on the same card twice
            or you'll lose!
          </p>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            {/* print out cards here */}

            {this.state.cardInfo.map(card => {
              return (
                <div className="col-12 col-sm-3 col-md-2 my-3" key={card.id}>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="img-fluid img-thumbnail rounded indvCard bg-dark"
                    onClick={() => this.handleClick(card.id)}
                  />
                </div>
              );
            })}
          </div>
          <footer className="sticky-bottom">
            <div className="container-fluid">
              Created By Rishabh Goel Copyright &copy; 2019{" "}
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Game;
