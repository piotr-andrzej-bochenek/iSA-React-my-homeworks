import * as React from 'react';
import { Button, Form } from "semantic-ui-react";
import { TODO_API_ENDPOINT } from '../toDo/ToDo';

const initialFormState = {
    task: '',
    done: false,
  };

export default class AddTask extends React.Component {
    state = {
        ...initialFormState,
        error: '',
    };

    handleOnChange = event => {
        this.setState({
          task: event.target.value,
          error: '',
        });
    };
    
    handleOnClick = event => {
        const { task } = this.state;
        event.preventDefault();
    
        if (!task) {
          this.setState({
            error: "Task required, please add task."
          });
        } else if (task.length < 3) {
            this.setState({
                error: "Task name is too short. Please use at least 3 characters."
            });
        } else {
          const formattedFormData = {
            ...initialFormState,
            task: this.state.task,
        };

          fetch(`${TODO_API_ENDPOINT}/todo.json`, {
            method: 'POST',
            body: JSON.stringify(formattedFormData),
          })
          .then(() => {
            this.props.onAdd();
            this.setState({
              ...initialFormState,
              error: '',
            });
          });
        };
      };
    
    render() {
        const { task, error } = this.state;
    
        return (
          <Form>
            <h3>Have I forgot about something?</h3>
            <div>{error}</div>
            <Form.Field>
              <input
                value={task}
                onChange={this.handleOnChange}
                name="task"
                placeholder="Type task name here"
              />
            </Form.Field>
            <Button type="submit" onClick={this.handleOnClick}>
              Add new task
            </Button>
          </Form>
        );
    };
};