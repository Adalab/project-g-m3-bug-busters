import React, {Component} from "react";
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const {avatar} = this.props;
    return (
      <div>
        <div style={{backgroundImage: `url(${avatar})`}}></div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Profile;