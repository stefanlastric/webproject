import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Landing extends Component {
  render() {
    return (
      <Card style={{ width: '15rem' }}>
        <Card.Img src="https://upload.wikimedia.org/wikipedia/sh/thumb/8/84/%D0%89%D0%B5%D1%82%D0%BE_%D1%83_%D0%B7%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D1%98_%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B8.jpg/200px-%D0%89%D0%B5%D1%82%D0%BE_%D1%83_%D0%B7%D0%BB%D0%B0%D1%82%D0%BD%D0%BE%D1%98_%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B8.jpg" />
        <Card.Body>
          <Card.Title>Ljeto u Zlatnoj dolini</Card.Title>
          <Card.Text>Akcioni domaci film</Card.Text>
        </Card.Body>

        <Card.Img src="https://www.filmsite.org/featured/movie-fr-alien.jpg" />
        <Card.Body>
          <Card.Title>Alien</Card.Title>
          <Card.Text>Sci-fy movie</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default () => (
  <div>
    <Landing />
  </div>
);
