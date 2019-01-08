import React, { Component } from 'react'

export default class componentName extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.name}.
                Do you want to see the secret area? <a href="/secret">Click here</a>
                <hr/>
                    Please login first.
                <hr/>
                <button onClick={this.props.auth.login} >Login</button>
            </div>
        )
    }
}
