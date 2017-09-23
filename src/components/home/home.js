import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>React + Redux App</h1>
        <p>This is some other text in a paragraph.</p>
        <Link to="about" className="btn btn-primary">about</Link>
      </div>
    );
  }
}

export default HomePage;