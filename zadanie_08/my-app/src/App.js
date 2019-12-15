import React from 'react';
import logo from './logo.svg';
import './App.css';
import players from './players'

class RenderTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <table>
          
          <thead>
            <tr>
              <th>User Name</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>User1</td>
              <td>User1 Points</td>
            </tr>
          </tbody>

        </table>
      </div>
    );
  };
}

function App() {
  return (
    <div>
      <RenderTable />
    </div>
  );
}
//W metodzie render wyrenderuj tablicę HTMLową (<table>)
//zawierającą nagłówki Username oraz Points - w każdym wierszu wyświetl
//dane poszczególnych obiektów z tablicy zaimportowanej z pliku src/players.js
export default App;
