import React from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';

function Profile(props) {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={0}>
          <p>
            The part "Profile" of the website is currently underconstruction.
            Come back in few months.
          </p>

          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
          <div className="spinner-border text-info zaprofil" role="status">
            <span className="zaprofil">Loading...</span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
