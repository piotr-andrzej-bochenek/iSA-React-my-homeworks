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
        />
      </div>
    );
  };
};

export default App;
