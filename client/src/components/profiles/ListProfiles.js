import React, { Component } from 'react';

/* Asynchronous HTTP library */
import Axios from 'axios';
import { ListGroup, Card, ListGroupItem, CardColumns } from 'react-bootstrap';

class ListProfiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      isLoading: true
    };
  }

  /* Use the lifecycle method to fetch relevant data */
  componentDidMount = () => {
    Axios.get('/profiles')
      .then(response => {
        /* Use response.data to access the actual data */
        this.setState({
          profiles: response.data
        });
      })
      .catch(error => {
        /* Use error to get the error message, or error.response(.data) to get all data returned with the error. */
        console.log(error.response);
      })
      .finally(() => {
        /* finally() executes at the end of the request, regardless if it succeeded or not */
        console.log('Profiles been retrieved.');
        this.setState({
          isLoading: false
        });
      });
    Axios.get('/users')
      .then(response => {
        /* Use response.data to access the actual data */
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        /* Use error to get the error message, or error.response(.data) to get all data returned with the error. */
        console.log(error.response);
      })
      .finally(() => {
        /* finally() executes at the end of the request, regardless if it succeeded or not */
        console.log('Profiles been retrieved.');
        this.setState({
          isLoading: false
        });
      });
  };

  render() {
    const { profiles } = this.state;
    console.log(this.state.profiles);
    return (
      <div>
        <h2>Profiles list</h2>
        {
          <div>
            {
              <CardColumns>
                {profiles.map((profile, index) => {
                  return (
                    <Card
                      key={index}
                      style={{ width: '18rem', margin: '1rem' }}
                    >
                      <Card.Body>
                        <Card.Title>id: </Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          <b>Bio: </b>
                          {profile.bio}
                        </ListGroupItem>
                        <ListGroupItem>
                          <b>Interests: </b>
                          {profile.interests}
                        </ListGroupItem>
                      </ListGroup>
                    </Card>
                  );
                })}
              </CardColumns>
            }
          </div>
        }
      </div>
    );
  }
}

export default ListProfiles;
