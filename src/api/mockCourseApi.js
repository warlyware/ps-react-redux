import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const games = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/games/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/games/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/games/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/games/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/games/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (game) => {
  return replaceAll(game.title, ' ', '-');
};

class GameApi {
  static getAllGames() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], games));
      }, delay);
    });
  }

  static saveGame(game) {
    game = Object.assign({}, game); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minGameTitleLength = 1;
        if (game.title.length < minGameTitleLength) {
          reject(`Title must be at least ${minGameTitleLength} characters.`);
        }

        if (game.id) {
          const existingGameIndex = games.findIndex(a => a.id == game.id);
          games.splice(existingGameIndex, 1, game);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new games in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          game.id = generateId(game);
          game.watchHref = `http://www.pluralsight.com/games/${game.id}`;
          games.push(game);
        }

        resolve(game);
      }, delay);
    });
  }

  static deleteGame(gameId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfGameToDelete = games.findIndex(game => {
          game.id == gameId;
        });
        games.splice(indexOfGameToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default GameApi;
