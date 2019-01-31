import React, { Component } from 'react';
import './App.css';
import Random from './Component/Random.js'
import {Row, Col} from 'reactstrap';

class App extends Component {

  state = {
    number: []
  };


  randomClick = () => {
      let myArray = [];
        while (myArray.length < 5) {
            let randomNumber = Math.floor(Math.random() * (37 - 5) + 5);
            if (myArray.indexOf(randomNumber) === -1) {
                myArray.push(randomNumber);
            }
        }

      let newState = {...this.state};
        newState.number = myArray.sort(function (a, b) {
            return a - b;
        });

      this.setState(newState);
    };


  render() {
    return (
      <div className="App">
        <div>
          <button className="mt-5 mb-5 btn btn-warning" onClick={this.randomClick}>Click</button>
          <Row>
            <Col>
              <Random number={this.state.number[0]}/>
            </Col>
            <Col>
              <Random number={this.state.number[1]}/>
            </Col>
            <Col>
              <Random number={this.state.number[2]}/>
            </Col>
            <Col>
              <Random number={this.state.number[3]}/>
            </Col>
            <Col>
              <Random number={this.state.number[4]}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
}

export default App;
