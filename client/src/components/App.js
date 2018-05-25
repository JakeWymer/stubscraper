import React, { Component } from 'react';
import ListView from './ListView';
import Header from './Header';
import EntryForm from './EntryForm';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <EntryForm />
        <ListView />
      </div>
    );
  }
}

export default App;
