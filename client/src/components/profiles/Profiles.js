import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner.js";
import { getProfiles } from "../../actions/profileActions.js";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = <h1>PROFILES HERE</h1>;
      } else {
        profileItems = <h4>No profiles found ... </h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="dispaly-4 text-center">Developr Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
            </div>
            {profileItems}
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapSteteToProps = state => ({
  profile: state.profile
});

export default connect(mapSteteToProps, { getProfiles })(Profiles);
