import * as React from "react";
import { Button, Link } from "semantic-ui-react";
import firebase from "firebase";


export default class Authentication extends React.Component {
    state = {
        user: null,
        reference: null,
    };

    componentDidMount() {
        const authReference = firebase.auth().onAuthStateChanged( user => {
            this.setState({
                user,
            });
        });

        this.setState({
            reference: authReference,
        });
    };

    componentWillUnmount() {
        if (this.state.reference) {
            this.state.reference();
        };
    };

    render() {
        return this.state.user
            ? this.props.children
            : <>
                <h1>Access only to registered users</h1>
                <Button variant="contained" color="primary" component={Link} to='/signin'>
                   Sign in
                </Button>
            </>
    };
};