import * as React from 'react';
import AddTask from '../addTask/AddTask';

export const TODO_API_ENDPOINT = 'https://jfdz12-homework-task-10-pab.firebaseio.com';

export default class ToDo extends React.Component {
    state = {
        todoList: [],
        error: "",
    };

    fetchToDoList = () => {
        fetch(TODO_API_ENDPOINT)
            .then( response => response.json())
            .then( fetchedData => {
                const keys = Object.keys(fetchedData);
                const formattedData = keys.map( key => {
                    return {
                        id: key,
                        ...fetchedData[key],
                    };
                });

                this.setState({
                    todoList: formattedData,
                });
            })
            .catch( error => {
                alert("No tasks yet, please add some tasks!");

                this.setState({
                  todoList: [],
                  error: error,
                });
            });
    };

    render() {
        return (
            <div>
                <h1>My "to do" list</h1>
                <AddTask />
            </div>
        );
    };
};