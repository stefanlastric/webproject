import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActors, deleteActor } from '../../actions/actor';

import './Actors.css';

import {
  ListGroup,
  Card,
  ListGroupItem,
  CardColumns,
  Button,
  Row
} from 'react-bootstrap';

const Actors = ({
  getActors,
  actor: { actors },
  deleteActor,
  isAuthenticated
}) => {
  useEffect(() => {
    getActors();
  }, []);

  return (
    <Fragment>
      <div className="actors">
        <Row className="budinasredini">
          <h2>Actor list</h2>
        </Row>

        <CardColumns className="actors-list">
          {actors.map((actor, index) => (
            <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
              <Card.Img variant="top" src={actor.image} />
              <Card.Body>
                <Card.Title>{actor.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <b>Age: </b>
                  {actor.age}
                </ListGroupItem>
                <ListGroupItem>
                  <b>From: </b>
                  {actor.from}
                </ListGroupItem>
              </ListGroup>
              {isAuthenticated && (
                <Button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => deleteActor(actor._id)}
                >
                  Delete Actor
                </Button>
              )}
            </Card>
          ))}
        </CardColumns>
      </div>
    </Fragment>
  );
};

Actors.propTypes = {
  getActors: PropTypes.func.isRequired,
  actor: PropTypes.object.isRequired,
  deleteActor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  actor: state.actor,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getActors, deleteActor })(Actors);
