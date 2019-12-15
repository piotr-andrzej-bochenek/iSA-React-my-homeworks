import React from 'react';
import logo from './logo.svg';
import './App.css';
import players from './players'

class RenderPlayersTable extends React.Component {
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
            {players.map((player, index) => {
              return (
              <tr key={index}>
                <td>{player.userName}</td>
                <td>{player.points}</td>
              </tr>
            )})}
          </tbody>

        </table>
      </div>
    );
  };
}

function App() {
  return (
    <div>
      <RenderPlayersTable />
    </div>
  );
}

export default App;
