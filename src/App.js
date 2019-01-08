import React, { Component } from 'react';
import logo from './logo.svg';
import Main from'./components/Main';
import Secret from './components/Secret';
import NotFount from './components/NotFound';
import Callback from './components/Callback';
import './App.css';

class App extends Component {
  render() {
    let mainComponents = "";
    switch(this.props.location) {
      case "":
        mainComponents = <Main {...this.props}/>;
        break;
      case "secret":
        mainComponents = this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <NotFount />;
        break;
      case "callback":
        mainComponents = <Callback />;
        break;
      default: 
        mainComponents = <NotFount />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to React, {this.props.name}</p>
          {mainComponents}
        </header>
      </div>
    );
  }
}

export default App;
