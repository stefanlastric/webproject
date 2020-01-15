import React from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import './Profile.css';
function Profile(props) {
  return (
    <div className="profile">
      <div className="spinner-border text-info " role="status">
        <span className="zaprofil">Loading...</span>
      </div>

      <p>
        The part "Profile" of the website is currently underconstruction. Come
        back in few months.
      </p>

      <div className="spinner-border text-info" role="status">
        <span className="zaprofil">Loading...</span>
      </div>
    </div>
  );
}

export default Profile;
