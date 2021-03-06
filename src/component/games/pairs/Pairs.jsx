import React, { Component } from "react";
import DisplayImages from "./DisplayImage";
import "./pairs.css";

// I have to use this approach to solve the problem when deploy in github.
// As when we use hashRoute it will not treat the normal route declaration and
// change the name of the image file
import snowman from "../../../images/snowman.jpg";
import sleigh from "../../../images/sleigh.jpg";
import santa from "../../../images/santa.jpg";
import rudolf from "../../../images/rudolf.jpg";
import gingerbread from "../../../images/gingerbread.jpg";
import bells from "../../../images/bells.jpg";

const IMAGES = [
  snowman,
  snowman,
  sleigh,
  sleigh,
  santa,
  santa,
  rudolf,
  rudolf,
  gingerbread,
  gingerbread,
  bells,
  bells
];

class Pairs extends Component {
  state = {
    cards: shuffleImages(IMAGES.slice()),
    selected: [],
    correct: []
  };

  onCardClick(clickedIndex) {
    const { selected, cards, correct } = this.state;
    if (selected.length === 0) {
      this.setState({ selected: [clickedIndex] });
    } else if (selected.length === 1) {
      if (cards[selected[0]] === cards[clickedIndex]) {
        // It's a match :)
        // Add selected cards to `correct` and reset selection
        this.setState({
          correct: correct.concat([selected[0], clickedIndex]),
          selected: []
        });
      } else {
        // It's not a match :(
        // Select it for now, and reset selection in a bit
        this.setState({ selected: [selected[0], clickedIndex] });
        setTimeout(() => {
          this.setState({ selected: [] });
        }, 1000);
      }
    }
  }

  // It resets the game
  onResetClick() {
    this.setState({
      cards: shuffleImages(IMAGES.slice()),
      correct: [],
      selected: []
    });
  }

  render() {
    const { correct, selected, cards } = this.state;
    return (
      <section className="resume-section p-3 p-lg-5 d-flex d-column">
        <div className="my-auto">
          <h2>Pairs</h2>
          <span onClick={() => this.onResetClick()} id="resetBtn">
            Reset <i className="fas fa-sync-alt" />
          </span>
          <div className="card-panel wrapper">
            {cards.map((image, i) => (
              <DisplayImages
                key={i}
                image={image}
                isCorrect={correct.includes(i)}
                isSelected={selected.includes(i)}
                onSelect={() => this.onCardClick(i)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

// Function to shuffle the images
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Pairs;
