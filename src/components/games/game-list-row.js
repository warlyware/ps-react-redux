import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const GameListRow = ({ game }) => {
  return(
    <tr>
      <td>
        <a href={game.watchHref}>Info</a>
      </td>
      <td>
        <Link to={'/game/' + game.id}>{game.title}</Link>
      </td>
      <td>{game.authorId}</td>
      <td>{game.category}</td>
      <td>{game.length}</td>
    </tr>
  );
};

GameListRow.propTypes = {
  game: PropTypes.object.isRequired
};

export default GameListRow;
