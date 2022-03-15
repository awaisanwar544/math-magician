import React from 'react';
import calculate from '../logic/calculate';
import CalcKey from './calcComponents/CalcKey';
import Display from './calcComponents/Display';

import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.result = '0';
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

  handleClick(e) {
    const newState = calculate(this.state, e.target.value);
    this.setState({ ...newState }, () => {
    });
  }

  updateResult = () => {
    const { total, next } = this.state;
    if (total === null && next === null) return '0';
    if (next === null) return total;
    return next;
  };

  render() {
    this.result = this.updateResult();
    return (
      <div className="calc-container">
        <Display value={this.result} />
        <div className="keypad">
          {this.buttons.map((item) => (
            <CalcKey
              key={item.text}
              type={item.type}
              keyValue={item.text}
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
