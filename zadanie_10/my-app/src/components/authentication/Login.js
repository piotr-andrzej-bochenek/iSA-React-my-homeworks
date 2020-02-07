import * as React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Container, Message } from 'semantic-ui-react';
import firebase from 'firebase';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        redirect: false,
    };

    handleOnChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
        });
    };

    isRegistered = () => {
      return this.props.match.path.includes('register');
    };

    signIn = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
    };

    register = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    redirect: true,
                });
            });
    };

    handleOnClick = event => {
      event.preventDefault();
      this.isRegistered() ? this.register() : this.signIn();
    };

    render() {

        const { email, password, redirect } = this.state;
      
        if (redirect) {
            return <Redirect to={'/'} />
        }

        return (
            <Container fluid>
                <h1>{ this.isRegistered() ? 'Register' : 'Sign in' }</h1>
                <Form>
                    <Form.Field>
                        <label>E-mail address</label>
                        <input
                            autoFocus
                            autoComplete='email'
                            label='email'
                            name='email'
                            value={email}
                            onChange={this.handleOnChange}
                            placeholder='E-mail address: '
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleOnChange}
                            value={password}
                            placeholder='Password: '
                        />
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button
                        type="submit"
                        variant="contained"
                        color="olive"
                        onClick={this.handleOnClick}
                    >
                        { this.isRegistered() ? 'Register' : 'Sign in' }
                    </Button>
                    <Form.Field>
                        <Message>
                            { this.isRegistered()  
                                ? <>Already registered? <Link to="/sign-in">Sign In</Link></>
                                : <>New to us? <Link to="/register">Register</Link></> 
                            }
                        </Message>
                    </Form.Field>
                </Form>
            
            </Container>
        );
    };
};