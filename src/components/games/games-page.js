import React, { PropTypes } from 'react';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: {
        title: null
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    const game = this.state.game;
    game.title = event.target.value;
    this.setState({
      game: game
    });
  }

  handleSubmit() {
    alert(`Saving ${this.state.game.title}`);
  }

  render() {
    return(
      <div>
        <h1>Games</h1>
        <h3>Add Game</h3>
        <input type="text"
        onChange={this.handleTitleChange}
        value={this.state.game.title} />
        <input type="submit"
        onClick={this.handleSubmit}
        value="save"/>
      </div>
    );
  }
}

export default GamesPage;