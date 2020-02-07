import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDR7uEPWHKD2jFrmm9-IPA-_udvLESfezs",
    authDomain: "jfdz12-homework-task-10-pab.firebaseapp.com",
    databaseURL: "https://jfdz12-homework-task-10-pab.firebaseio.com",
    projectId: "jfdz12-homework-task-10-pab",
    storageBucket: "jfdz12-homework-task-10-pab.appspot.com",
    messagingSenderId: "905679454817",
    appId: "1:905679454817:web:2e3d7d4ca4f1857fc22020"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
