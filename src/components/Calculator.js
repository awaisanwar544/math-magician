import React from 'react';
import CalcKey from './calcComponents/CalcKey';
import Display from './calcComponents/Display';

import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
    this.buttons = [
      {
        text: 'AC',
        type: 'other',
      },
      {
        text: '+/-',
        type: 'other',
      },
      {
        text: '%',
        type: 'other',
      },
      {
        text: '÷',
        type: 'operator',
      },
      {
        text: '7',
        type: 'other',
      },
      {
        text: '8',
        type: 'other',
      },
      {
        text: '9',
        type: 'other',
      },
      {
        text: 'x',
        type: 'operator',
      },
      {
        text: '4',
        type: 'other',
      },
      {
        text: '5',
        type: 'other',
      },
      {
        text: '6',
        type: 'other',
      },
      {
        text: '-',
        type: 'operator',
      },
      {
        text: '1',
        type: 'other',
      },
      {
        text: '2',
        type: 'other',
      },
      {
        text: '3',
        type: 'other',
      },
      {
        text: '+',
        type: 'operator',
      },
      {
        text: '0',
        type: 'other span-2-col',
      },
      {
        text: '.',
        type: 'other',
      },
      {
        text: '=',
        type: 'operator',
      },
    ];
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calc-container">
        <Display value={result} />
        <div className="keypad">
          {this.buttons.map((item) => (
            <CalcKey
              key={item.text}
              type={item.type}
              keyValue={item.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
