// import react and components
import React from "react";
import Header from "./components/Header"
import ImgCard from "./components/ImgCard";

// create array containing each character with id, image path and name
const imgsArr = [
  {
    id: 1,
    image: "./images/",
    name: "Goku"
  },
  {
    id: 2,
    image: "./images/",
    name: "Vegeta"
  },
  {
    id: 3,
    image: "./images/",
    name: "Trunks"
  },
  {
    id: 4,
    image: "./images/",
    name: "Gohan"
  },
  {
    id: 5,
    image: "./images/",
    name: "Majin Buu"
  },
  {
    id: 6,
    image: "./images/",
    name: "Goten"
  },
  {
    id: 7,
    image: "./images/",
    name: "Krillin"
  },
  {
    id: 8,
    image: "./images/",
    name: "Frieza"
  },
  {
    id: 9,
    image: "./images/",
    name: "Cell"
  },
  {
    id: 10,
    image: "./images/",
    name: "Vegito"
  }
]

// create class with state 
class App extends React.Component {

  state = {
    count: 0,
    imgList: imgsArr,
    high: 0
  }

  // method to handle clicked images
  handleImgClick = () => {

    
    if (this.state.imgList.clicked) {
      this.setState(this.state.imgList.clicked = false)
      this.setState({ count: this.state.count + 1 });
      this.handleHighScores();
      this.shuffleCards();
    } else if (!this.state.imgList.clicked) {
      this.setState({ count: 0 });
      this.shuffleCards();
    }
  };

  // method to shuffle cards
  shuffleCards = () => {
    const shuffledImgs = this.state.imgList.sort(() => 0.5 - Math.random());

    this.setState({
      imgList: shuffledImgs
    });
  };

  // method to handle high scores
  handleHighScores = () => {
    if (this.state.count === this.state.high) {
      this.setState({ high: this.state.count })
    }
  }

  // render componenets using react 
  render() {
    return (
      <div>
        <Header count={this.state.count} high={this.state.high} />
        <div className="container">
          {
            this.state.imgList.map(image => {
              return (
                <ImgCard image={image.image} handleImgClick={this.handleImgClick} key={image.id} name={image.name} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

// export statement 
export default App;