import React from 'react';
import logo from './logo.svg';
import './App.css';
import players from './players.json'

const pointsTotal = players.reduce((total, current) => {
  return (total + current.points)
  },0);

class RenderPlayersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightingColor: "",
      backgroundColorChanged: false,
    };
  }

  render() {
    return (
      <div>
        <div>Click here to highlight players with scores equal and above 100 points.</div>
        <button onClick={() => this.setState({
                        highlightingColor: "red",
                        backgroundColorChanged: true,
        })}>
          Red
        </button>
        
        <button onClick={() => this.setState({
                        highlightingColor: "blue",
                        backgroundColorChanged: true,
        })}>
          Blue
        </button>

        <button onClick={() => this.setState({
                        highlightingColor: "",
                        backgroundColorChanged: false,
        })}>
          None
        </button>

        <table>
          
          <thead>
            <tr>
              <th>User Name</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            {
              players.map((player, index) => {
              if (player.points < 100) {
                return (
                  <tr key={index}>
                    <td>{player.userName}</td>
                    <td>{player.points}</td>
                  </tr>
                  )} else {
                  return (
                    <tr 
                      style={{
                        background: `${this.state.highlightingColor}`,
                        color: this.state.backgroundColorChanged ? 'white' : '',
                      }}
                      key={index}
                    >
                      <td>{player.userName}</td>
                      <td>{player.points}</td>
                    </tr>
                  )};
              })
            }
          </tbody>

          <tfoot>
            <tr>
              <td>Total</td>
              <td>{pointsTotal}
              </td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{pointsTotal/players.length}</td>
            </tr>

          </tfoot>

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
