import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActors, deleteActor } from '../../actions/actor';

import {
  ListGroup,
  Card,
  ListGroupItem,
  CardColumns,
  Button,
  Row
} from 'react-bootstrap';

const Actors = ({ getActors, actor: { actors, _id }, deleteActor }) => {
  useEffect(() => {
    getActors();
  }, []);

  return (
    <Fragment>
      <Row className="budinasredini">
        <h2>Actor list</h2>
      </Row>

      <CardColumns>
        {actors.map((actor, _id) => (
          <Card key={_id} style={{ width: '18rem', margin: '1rem' }}>
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
            <Button
              className="btn btn-danger"
              type="button"
              value={_id}
              onClick={() => deleteActor()}
            >
              Delete Actors
            </Button>
          </Card>
        ))}
      </CardColumns>
    </Fragment>
  );
};

Actors.propTypes = {
  getActors: PropTypes.func.isRequired,
  actor: PropTypes.object.isRequired,
  deleteActor: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  actor: state.actor
});

export default connect(mapStateToProps, { getActors, deleteActor })(Actors);
