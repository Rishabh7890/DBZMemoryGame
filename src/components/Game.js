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

  
}