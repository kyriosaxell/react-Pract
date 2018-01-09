//Dependencies
import React, { Component } from 'react';


//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Company" items={items} />
        <Content />
        <Footer copyright="&copy; Company" />
      </div>
    );
  }
}

export default App;
