import React from 'react';

import PlayerRow from './PlayerRow';

const initialFormState = {
    userName: '',
    points: 0,
};

export default class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightingColor: '',
            backgroundColorChanged: false,
            ...initialFormState,
        };
    };
    
    handleOnChange = event => {
        event.preventDefault();

        this.setState({
            userName: event.target.value,
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();

        const newPlayer = {
            id: `${this.props.players.length}`,
            userName: this.state.userName,
            points: parseInt(Math.floor(Math.random() * 200)),
        };

        this.props.onAdd(newPlayer);
        this.setState(initialFormState);
    };

    render() {
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
        
                    <button
                        onClick = {() => this.setState({
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
                        this.props.players.map((player) => {
                            if (player.points < 100) {
                                return (
                                    <PlayerRow
                                        key={player.id}
                                        player={player}
                                    />
                                )} else {
                                    return (
                                        <PlayerRow
                                        key={player.id}
                                        player={player}
                                        highlightingColor={this.state.highlightingColor}
                                        backgroundColorChanged={this.state.backgroundColorChanged}
                                    />
                                    );
                                };
                        })
                    }
                    </tbody>
        
                    <tfoot>
                        <tr>
                            <td> Total </td>
                            <td> {this.props.sumOfPoints} </td>
                        </tr>
                        <tr>
                            <td> Average </td>
                            <td> {Math.round(this.props.sumOfPoints / this.props.players.length)} </td>
                        </tr>
                    </tfoot>
        
                </table>
                <form onSubmit={this.handleOnSubmit}>
                    <input value={this.state.userName} onChange={this.handleOnChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    };
};