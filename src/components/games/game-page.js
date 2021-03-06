import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gameActions from '../../actions/game-actions';
import GameList from './game-list';

class GamePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  gameRow(game, index) {
    return <div key={index}>{game.title}</div>;
  }

  render() {
    return(
      <div>
        <h1>Games</h1>
        <GameList games={this.props.games} />
      </div>
    );
  }
}

GamePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
