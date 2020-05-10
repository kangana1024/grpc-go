import React from 'react';
import logo from './logo.svg';
import './App.css';
// const { GreetServiceClient } = require('./greet_grpc_web_pb');
// const { GreetRequest } = require('./greet_pb');
import { CalculatorServicePromiseClient } from './calculator_grpc_web_pb';
import { SumRequest } from './calculator_pb';

// const client = new GreetServiceClient('http://localhost:50051', null, null);

const client = new CalculatorServicePromiseClient(
  'http://localhost:50051',
  null,
  null
);
const App = () => {
  const callGreet = () => {
    const request = new SumRequest();
    request.setFirstNumber(3);
    request.setSecondNumber(10);

    client.sum(request, {}, (err, res) => {
      console.log(err, res);
    });

    // client.greet(request, {}, (err, res) => {
    //   if (res === null) {
    //     console.log(err);
    //   } else {
    //     console.log(res);
    //   }
    // });
  };
  const handleGreeting = (e) => {
    e.preventDefault();
    callGreet();
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          onClick={handleGreeting}
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
