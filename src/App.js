
import React, { Component } from 'react';
import HelloWorld from './state-drills/Helloworld';
import Bomb from './state-drills/Bomb';
import Рулеткапистолет from './state-drills/Рулеткапистолет';
import Accordion from './state-drills/Accordion';
import './index.css'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  }
]

class App extends Component {
  render() {
    return (
      <div className="App Child">
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <Рулеткапистолет bulletInChamber={6} />
        <h2>Accordion</h2>
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;
