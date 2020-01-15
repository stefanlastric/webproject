import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies, deleteMovie } from '../../actions/movie';

import {
  ListGroup,
  Card,
  ListGroupItem,
  CardColumns,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const Movies = ({ getMovies, movie: { movies }, deleteMovie }) => {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Row>
      <Col sm={0}>
        <div>
          <h2 className="budinasredini">Movie list</h2>
          {
            <div>
              {
                <CardColumns>
                  {movies.map((movie, index) => {
                    return (
                      <Card
                        key={index}
                        style={{ width: '18rem', margin: '1rem' }}
                      >
                        <Card.Img variant="top" src={movie.image} />
                        <Card.Body>
                          <Card.Title>{movie.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>
                            <b>Year: </b>
                            {movie.year}
                          </ListGroupItem>
                          <ListGroupItem>
                            <b>Genre: </b>
                            {movie.genre}
                          </ListGroupItem>
                        </ListGroup>
                        <Button
                          variant="danger"
                          onClick={() => deleteMovie(index)}
                        >
                          Delete Movie
                        </Button>
                      </Card>
                    );
                  })}
                </CardColumns>
              }
            </div>
          }
        </div>
      </Col>
    </Row>
  );
};
Movies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  deleteMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, { getMovies, deleteMovie })(Movies);
