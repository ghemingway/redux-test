/**
 * Created by ghemingway on 4/20/17.
 */
import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { Route, Redirect }              from 'react-router-dom';

import { Landing }                      from './components/landing';
import { Login }                        from './components/login';
import Profile                          from './components/profile';


class App extends Component {
    render() {
        return <div>
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/profile/:user" render={(props) => {
                const user = this.props.user;
                return typeof(user) === 'object' && !user.error ?
                    <Profile {...props}/> :
                    <Redirect to={{
                        pathname: '/login',
                        search: `?return=${props.match.url}`
                    }}/>
            }}/>
        </div>;
    }
}

export default connect(state => ({
    user: state.login.user
}))(App);