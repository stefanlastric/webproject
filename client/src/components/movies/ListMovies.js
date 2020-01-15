import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies, deleteMovie } from '../../actions/movie';
import './ListMovies.css';

import {
  ListGroup,
  Card,
  ListGroupItem,
  CardColumns,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const Movies = ({
  getMovies,
  movie: { movies },
  deleteMovie,
  isAuthenticated
}) => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies">
      <h2 className="movies-title">Movie list</h2>
      {
        <div className="movies-list">
          {
            <CardColumns>
              >
              {movies.map((movie, index) => {
                return (
                  <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={movie.image} />
                    <Card.Body>
                      <Card.Title>{movie.name}</Card.Title>
                    </Card.Body>
                    <ListGroup>
                      <ListGroupItem>
                        <b>Year: </b>
                        {movie.year}
                      </ListGroupItem>
                      <ListGroupItem>
                        <b>Genre: </b>
                        {movie.genre}
                      </ListGroupItem>
                    </ListGroup>
                    {isAuthenticated && (
                      <Button
                        variant="danger"
                        onClick={() => deleteMovie(movie._id)}
                      >
                        Delete Movie
                      </Button>
                    )}
                  </Card>
                );
              })}
            </CardColumns>
          }
        </div>
      }
    </div>
  );
};
Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getMovies, deleteMovie })(Movies);
