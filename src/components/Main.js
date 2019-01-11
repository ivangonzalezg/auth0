import React, { Component } from 'react'
import { Button} from 'react-bootstrap'

export default class componentName extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.name}.
                Do you want to see the secret area? <a href="/secret">Click here</a>
                {!this.props.auth.isAuthenticated() &&
                    <div>
                        <hr />
                        Please login first.
                        <hr />
                        <Button onClick={this.props.auth.login} >Login</Button>
                    </div>
                }
            </div>
        )
    }
}
