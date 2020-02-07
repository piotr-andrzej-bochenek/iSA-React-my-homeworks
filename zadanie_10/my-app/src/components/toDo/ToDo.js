import * as React from 'react';
import { Table } from 'semantic-ui-react';

import Authentication from '../authentication/Authentication';
import ToDoTableRowDisplay from '../toDo/ToDoTableRowDisplay';
import ToDoTableRowEdit from '../toDo/ToDoTableRowEdit';
import AddTask from '../addTask/AddTask';

export const TODO_API_ENDPOINT = 'https://jfdz12-homework-task-10-pab.firebaseio.com';

export default class ToDo extends React.Component {
    state = {
        toDoList: [],
        editId: null,
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
                    toDoList: formattedData,
                });
            })
            .catch( error => {
                alert("Task list is empty, please add some tasks!");

                this.setState({
                  todoList: [],
                  error: error,
                });
            });
    };

    handleOnAction = () => {
        this.fetchToDoList();
    };

    handleStatusChange = (id, isDone) => {
        const formattedData = {
           done: !isDone,
        };

        fetch(`${TODO_API_ENDPOINT}/todo/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(formattedData)
        })
        .then(() => {
            this.handleOnAction();
        });
    };

    handleOnEditClick = idSelectedToEdit => {
        this.setState({
            editId: idSelectedToEdit,
        });
    };

    handleOnSaveEditForm = () => {
        this.handleOnAction();
        this.setState({
            editId: null,
        });
    };

    handleOnCloseEditForm = () => {
        this.setState({
            editId: null
        });
    };

    handleOnDeleteClick = id => {
        fetch(`${TODO_API_ENDPOINT}/todo/${id}.json`, {
            method: 'DELETE',
        })
        .then(() => {
            this.handleOnAction();
        })
    };

    componentDidMount() {
        this.fetchToDoList();
    };

    render() {
        const { toDoList } = this.state;

        return (
            <Authentication>
                <div>
                    <h1>My first "to do" list:</h1>
                    <Table celled structured>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell>Task</Table.HeaderCell>
                            <Table.HeaderCell>Done?</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {toDoList.map( toDoTask => {
                                return this.state.editId === toDoTask.id
                                ?  <ToDoTableRowEdit 
                                    key={toDoTask.id}
                                    id={toDoTask.id}
                                    toDoTask={toDoTask}
                                    task={toDoTask.task}
                                    done={toDoTask.done}
                                    setTaskStatus={this.handleStatusChange}
                                    onDeleteTask={this.handleOnDeleteClick}
                                    onSaveEditedTask={this.handleOnSaveEditForm}
                                    onCloseEditForm={this.handleOnCloseEditForm}
                                />
                                : <ToDoTableRowDisplay
                                    key={toDoTask.id}
                                    id={toDoTask.id}
                                    task={toDoTask.task}
                                    done={toDoTask.done}
                                    setTaskStatus={this.handleStatusChange}
                                    openEditForm={this.handleOnEditClick}
                                    onDeleteTask={this.handleOnDeleteClick}
                                />
                                })}
                        </Table.Body>
                    </Table>
                    <AddTask onAdd={this.handleOnAction} />
                </div>
            </Authentication>
        );
    };
};