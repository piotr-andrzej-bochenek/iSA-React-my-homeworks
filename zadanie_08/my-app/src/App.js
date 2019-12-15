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

          <tfoot>
            <tr>
              <td>Total</td>
              <td>{players.reduce((total, current) => {
              return (total+current.points)
              },0)}
              </td>
            </tr>
            <tr>
              <td>Average</td>
              <td>to be calculated...</td>
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

// Korzystając z kodu z zadania 1. wyświetl w tablicy dodatkowy wiersz na samym dole,
// w którym w kolumnie z nagłówkiem Points znajdzie się liczba będąca sumą wszystkich
// punktów zdobytych przez graczy. W kolumnie Username w tym wierszu niech znajdzie
// się etykieta Total

//Poniżej tego wiersza dodaj kolejny wiersz, w którym wyświetlimy analogicznie
//średnią punktów z etykietą Average

export default App;
