import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Content from './components/content/Content';
import './App.css';

function App() {
  return (
    <Router>
        <h1>Welcome to ToDo list manager!</h1>
        <Content />
    </Router>
  );
}

export default App;
