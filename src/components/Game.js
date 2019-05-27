import React, { Component } from "react";
import cardInfo from "../cards.json";

class Game extends Component {
  state = {
    cardInfo: [...cardInfo],
    currentScore: 0,
    highScore: 0
  };

  handleClick = cardId => {
    let isCorrect = false;

    const cardInfo = [...this.state.cardInfo];

    cardInfo.forEach(card => {
      if(card.id === card.id) {
        if(!card.clicked) {
          isCorrect = true;
          card.clicked = true;
        }
      }
    });

    isCorrect ? this.handleCorrectPick(cardInfo) : this.handleIncorrectPick(cardInfo);
  };

  handleCorrectPick = cardInfo => {

    const shuffled = cardInfo.sort(() => 0.5 - Math.random());

    const currentScore = this.state.currentScore + 1;

    var highScore = this.state.highScore;

    if(currentScore > highScore) {
      highScore = currentScore;
    }

    this.setState({
      cardInfo: shuffled,
      currentScore: currentScore,
      highScore: highScore
    });
  };

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
        <nav className="navbar navbar-dark bg-dark d-flex justify-space-between">
          <span className="navbar-brand mb-0">Clicky Game</span>
          <span className="scoreInfo text-light">
            Current Score: {this.state.currentScore} || Your Highest Score: {this.state.highScore}
          </span>
        </nav>
        <div className="jumbotron jumbotron-fluid bg-warning text-dark text-center">
          <h1>Dragonball Z Memory Clicky Game</h1>
          <p>Click on a card to get started. Don't click on the same card twice or you'll lose!</p>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            
            {/* print out cards here */}

            {this.state.cardInfo.map(card => {
              return (
                <div className="col-12 col-sm-3 col-md-2" key={card.id}>
                  <img
                    src={card.image}
                    alt={card.name}
                    className="img-fluid img-thumbnail rounded"
                    onClick={() => this.handleClick(card.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Game;