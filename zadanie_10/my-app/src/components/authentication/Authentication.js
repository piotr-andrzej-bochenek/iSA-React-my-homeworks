import * as React from "react";
import { Link } from 'react-router-dom';
import firebase from 'firebase';

export default class Authentication extends React.Component {
    state = {
        user: null,
        ref: null,
    };

    componentDidMount() {
        const authRef = firebase.auth().onAuthStateChanged( user => {
            this.setState({
                user,
            });
        });

        this.setState({
            ref: authRef,
        });
    };

    componentWillUnmount() {
        if (this.state.ref) {
            this.state.ref();
        };
    };

    render() {
        return this.state.user
            ? this.props.children
            : <>
                <h1>Access only to registered users</h1>
                <Link to="/sign-in">Sign in</Link>
            </>
    };
};