import React from 'react';

import './App.css';
import Players from '../src/components/players/Players';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      sumOfPoints: 0,
      isLoading: true,
      error: false,
    };
  };

  getPlayers = () => {
    fetch('/data/players.json')
    .then( response => response.json())
    .then( fetchedData => {
      const keys = Object.keys(fetchedData);
      const formattedData = keys.map(key => {
          return {
              id: key,
              ...fetchedData[key],
          }
      });
      this.setState({ 
        players: formattedData,
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

  handleAddPlayer = (newPlayer) => {
    this.setState({
            players: [
                ...this.state.players,
                newPlayer,
            ],
            sumOfPoints: this.state.sumOfPoints + newPlayer.points,
    });
  };

  handleRemovePlayer = (id) => {
    const remainingPlayers = this.state.players.filter( player => player.id !== id)
    this.setState({
      players: remainingPlayers,
      sumOfPoints: remainingPlayers.reduce( (total, current) => total + current.points, 0),
    });
  };

  componentDidMount() {
    this.getPlayers();
  };

  render() {

    if (this.state.isloading) {
      return <h1>Loading ...</h1>;
    };

    if (this.state.error) {
      return <h1>{`An error occurred: ${this.state.error}.`}</h1>;
    };

    return (
      <div>
        <Players
          players={this.state.players}
          sumOfPoints={this.state.sumOfPoints}
          onAdd={this.handleAddPlayer}
          onRemove={this.handleRemovePlayer}
        />
      </div>
    );
  };
};

export default App;
