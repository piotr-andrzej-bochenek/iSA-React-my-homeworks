import React from 'react';
import './App.css';

class RenderPlayersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      sumOfPoints: 0,
      highlightingColor: '',
      backgroundColorChanged: false,
      isLoading: true,
      error: false,
    };
  };

  getPlayers = () => {
    fetch('/data/players.json')
    .then( response => response.json())
    .then( fetchedData => {
      this.setState({ 
        players: fetchedData,
       });
    })
    .then( ()  => {
      this.setState({ 
        sumOfPoints: this.state.players.reduce( (total, current) => total + current.points, 0),
       });
    })
    .catch( error => this.setState({ error: error }))
    .finally( () => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    if (this.state.isloading) {
      return <h1>Loading ...</h1>;
    };

    if (this.state.error) {
      return <h1>{`An error occurred: ${this.state.error}.`}</h1>;
    };

    return (
      <div className='App'>
        <div className='App__header'>
          Click buttons to highlight (or clear highlight of) players with scores equal and above 100 points.
        </div>
        <div className='App__buttons'>
          <button
            style = {{backgroundColor: 'red'}}
            onClick = {() => this.setState({
                    highlightingColor: 'red',
                    backgroundColorChanged: true,
          })}>
            Red
          </button>
          
          <button
            style = {{backgroundColor: 'blue'}}
            onClick = {() => this.setState({
                    highlightingColor: 'blue',
                    backgroundColorChanged: true,
          })}>
            Blue
          </button>

          <button onClick = {() => this.setState({
                    highlightingColor: "",
                    backgroundColorChanged: false,
          })}>
            None
          </button>
        </div>
        
        <table className='App__table'>
          
          <thead >
            <tr>
              <th> User name </th>
              <th> Points </th>
            </tr>
          </thead>

          <tbody>
            { 
              this.state.players.map((player, index) => {
              if (player.points < 100) {
                return (
                  <tr key = {index}>
                    <td> {player.userName} </td>
                    <td> {player.points} </td>
                  </tr>
                  )} else {
                  return (
                    <tr
                      style={{
                        backgroundColor: `${this.state.highlightingColor}`,
                        color: this.state.backgroundColorChanged ? 'white' : '',
                      }}
                      key = {index}
                    >
                      <td> {player.userName} </td>
                      <td> {player.points} </td>
                    </tr>
                  )};
              })
            }
          </tbody>

          <tfoot>
            <tr>
              <td> Total </td>
              <td> {this.state.sumOfPoints} </td>
            </tr>
            <tr>
              <td> Average </td>
              <td> {Math.round(this.state.sumOfPoints / this.state.players.length)} </td>
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
