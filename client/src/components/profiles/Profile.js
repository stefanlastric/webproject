import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles} }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return (
        <Fragment>
          <h1 className='large text-primary'>Users</h1>
          <p className='lead'>
            <i className='fas fa-users'></i> Browse users
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => ())
            ) : (
              <h4>No profiles found....</h4>
            )}
          </div>
       
      )
    </Fragment>
  
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
