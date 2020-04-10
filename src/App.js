import React, { Component } from 'react';
import { Button, message } from 'antd';
import './App.css';

class App extends Component {
  handleClick = () => {
    message.success('成功')
  }
  render () {
    return (
      <div className="App">
        <Button type="primary" onClick={this.handleClick}>Button</Button>
      </div>
    );
  }
}

export default App;
