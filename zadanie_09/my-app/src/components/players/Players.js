import React from 'react';

export default class Players extends React.Component {
    state = {
        highlightingColor: '',
        backgroundColorChanged: false,
    }

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
                        this.props.players.map((player, index) => {
                            if (player.points < 100) {
                                return (
                                    <tr key = {index} >
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
            </div>
        );
    };
};