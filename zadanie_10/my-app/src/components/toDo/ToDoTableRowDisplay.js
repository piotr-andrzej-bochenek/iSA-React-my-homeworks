import * as React from 'react';
import {Button, Icon, Checkbox, Table } from 'semantic-ui-react';

export default function TableRowDisplay(props) {

    const handleStatusChange = (id, isDone) => {
        props.setTaskStatus(id, isDone);
    };
    
    const handleOnEditClick = id => {
        props.openEditForm(id);
    };

    const handleOnDeleteClick = id => {
        props.onDeleteTask(id);
    };

    return (
        <Table.Row key={props.id} id={props.id}>
            <Table.Cell>{props.task}</Table.Cell>
            <Table.Cell>
                <Checkbox
                    toggle
                    checked={props.done}
                    onChange={() => handleStatusChange(props.id, props.done)}
                />
            </Table.Cell>
            <Table.Cell>
                <Button primary icon onClick={() => handleOnEditClick(props.id)} >
                    <Icon name='edit' />
                </Button>
            </Table.Cell>
            <Table.Cell>
                <Button negative icon onClick={() => handleOnDeleteClick(props.id)} >
                    <Icon name='trash' />
                </Button>
            </Table.Cell>
        </Table.Row>
    )
}