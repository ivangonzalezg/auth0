import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

export default class componentName extends Component {
    render() {
        return (
            <div>
                This is a super secret area.
                <br />
                <Form action="/">
                    <Button type="submit">Go home</Button>
                </Form>
                <br/>
                <Button onClick={this.props.auth.logout}>Logout</Button>
            </div>
        )
    }
}
