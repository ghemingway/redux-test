
import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { profileRequest }               from '../actions/profile';

class ProfileView extends Component {
    componentDidMount() {
        this.props.dispatch(profileRequest('graham'));
    }

    render() {
        return <div>
            <div>Profile: {this.props.profile.username}</div>
            { this.props.profile.email ? <div>Email: {this.props.profile.email}</div> : undefined }
        </div>;
    }
}

const Profile = connect(state => ({
    profile: state.profile
}))(ProfileView);

export { Profile };