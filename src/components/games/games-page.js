import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../actions/game-actions';

class GamesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      game: {
        title: ''
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
    this.props.actions.createGame(this.state.game);
  }

  gameRow(game, index) {
    return <div key={index}>{game.title}</div>;
  }

  render() {
    return(
      <div>
        <h1>Games</h1>
        {this.props.games.map(this.gameRow)}
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

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);
