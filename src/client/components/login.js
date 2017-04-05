
import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { loginRequest }                 from '../actions/actions';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    onSubmit() {
        this.props.dispatch(loginRequest(this.state.username, this.state.password));
    }

    render() {
        const error = this.props.user && this.props.user.error ? this.props.user.error : undefined;
        return <div>
            <div>{error}</div>
            <div>
                <label htmlFor="username">Username:</label>
                <input name="username" value={this.state.username} onChange={this.onChange}/>
            </div>
            <div>
                <label htmlFor="username">Password:</label>
                <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
            </div>
            <button onClick={this.onSubmit}>Login</button>
        </div>;
    }
}


const Login = connect(state => ({
    user: state.login.user
}))(LoginView);

export { Login };