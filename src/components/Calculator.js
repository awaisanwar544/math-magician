import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalcKey from './calcComponents/CalcKey';
import Display from './calcComponents/Display';

import './Calculator.css';

const Calculator = () => {
  let result = '0';
  const buttons = [
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

  const [calculations, setCalculations] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const newState = calculate(calculations, e.target.value);
    setCalculations(newState);
  };

  const updateResult = () => {
    const { total, next } = calculations;
    if (total === null && next === null) return '0';
    if (next === null) return total;
    return next;
  };

  result = updateResult();

  return (
    <div className="calc-container">
      <Display value={result} />
      <div className="keypad">
        {buttons.map((item) => (
          <CalcKey
            key={item.text}
            type={item.type}
            keyValue={item.text}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
