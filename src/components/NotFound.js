import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';

export default class componentName extends Component {
    render() {
        return (
            <div>
                Uh oh, not found.
                <br />
                <Form action="/">
                    <Button type="submit">Go home</Button>
                </Form>
            </div>
        )
    }
}
