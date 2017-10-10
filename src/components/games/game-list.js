import React, { PropTypes } from 'react';
import GameListRow from  './game-list-row';

const GameList = ({ games }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game =>
          <GameListRow key={game.id} game={game} />
        )}
      </tbody>
    </table>
  );
};

export default GameList;
