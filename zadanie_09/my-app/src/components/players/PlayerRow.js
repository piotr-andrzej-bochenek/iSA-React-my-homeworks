import React from 'react';

export default class PlayerRow extends React.Component {

    render() {
        return (
            <tr 
                style={{
                    backgroundColor: `${this.props.highlightingColor}`,
                    color: this.props.backgroundColorChanged ? 'white' : '',
                }}
                key = {this.props.player.id} >
                <td> {this.props.player.userName} </td>
                <td> {this.props.player.points} </td>
            </tr>
        );
    };
};