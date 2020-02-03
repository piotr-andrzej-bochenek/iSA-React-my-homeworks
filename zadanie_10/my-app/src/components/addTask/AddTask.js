import * as React from 'react';

export default class AddTask extends React.Component {
    
    render() {
        return (
            <div>
                <form>
                    <label>Add new task here: </label>
                    <input></input>
                    <button>Add</button>
                </form>
            </div>
        );
    };
};