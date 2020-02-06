import * as React from 'react';
import { Table, Icon } from 'semantic-ui-react';

import AddTask from '../addTask/AddTask';

export const TODO_API_ENDPOINT = 'https://jfdz12-homework-task-10-pab.firebaseio.com';

export default class ToDo extends React.Component {
    state = {
        todoList: [],
        error: "",
    };

    fetchToDoList = () => {
        fetch(`${TODO_API_ENDPOINT}/todo.json`)
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

    handleOnAction = () => {
        this.fetchToDoList();
    };

    componentDidMount() {
        this.fetchToDoList();
    };

    render() {
        const { todoList } = this.state;

        return (
            <div>
                <h1>My "to do" list</h1>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Task</Table.HeaderCell>
                        <Table.HeaderCell>Done</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {todoList.map( todo => {
                            return (
                                <Table.Row key={todo.id}>
                                    <Table.Cell>{todo.task}</Table.Cell>
                                    {todo.done !== true
                                    ? <Table.Cell>
                                        <Icon color='green' name='checkmark' size='large' />
                                    </Table.Cell>
                                    : <Table.Cell />}
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
                <AddTask onAdd={this.handleOnAction} />
            </div>
        );
    };
};