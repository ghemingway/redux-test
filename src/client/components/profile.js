
import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { profileRequest }               from '../actions/profile';

class Profile extends Component {
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

export default connect(state => ({
    profile: state.profile
}))(Profile);

