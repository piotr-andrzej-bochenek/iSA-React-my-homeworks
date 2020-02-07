import * as React from 'react';
import { Table, Button, Icon, Checkbox, Form } from 'semantic-ui-react';

import TODO_API_ENDPOINT from '../toDo/ToDo';

export default class ToDoTableRowEdit extends React.Component {
    state = {
        ...this.props.toDoTask,
    };

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleStatusChange = (id, isDone) => {
        this.props.setStatus(id, isDone);
    };

    handleOnSaveClick = () => {
        const editedTaskData = {
            ...this.state,
        };

        fetch(`${TODO_API_ENDPOINT}/todo/${this.props.id}.json`, {
            method: 'PUT',
            body: JSON.stringify(editedTaskData)
        })
        .then(() => {
            this.props.onSaveEditedTask();
        })
    };
    
    handleOnCloseClick = () => {
        this.props.onCloseEditForm();
    };

    handleOnDeleteClick = id => {
        this.props.onDeleteTask(id);
    };

    render() {
        return (
            <Table.Row key={this.props.id} id={this.props.id}>
                <Table.Cell>
                    <Form.Field>
                        <input
                            value={this.props.task}
                            onChange={this.handleOnChange}
                            name="task"
                            placeholder={this.props.task}
                        />
                    </Form.Field>
                </Table.Cell>
                <Table.Cell>
                    <Checkbox
                        toggle
                        checked={this.props.done}
                        onChange={() => this.handleStatusChange(this.props.id, this.props.done)}
                    />
                </Table.Cell>
                <Table.Cell>
                    <Button positive icon onClick={this.handleOnSaveClick}>
                        <Icon name="save" />
                    </Button>
                    <Button secondary icon onClick={this.handleOnCloseClick}>
                        <Icon name="close" />
                    </Button>
                </Table.Cell>
                <Table.Cell>
                    <Button negative icon onClick={() => this.handleOnDeleteClick(this.props.id)} >
                        <Icon name='trash' />
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}