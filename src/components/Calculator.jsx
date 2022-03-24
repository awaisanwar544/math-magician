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
      category: 'other',
    },
    {
      text: '+/-',
      category: 'other',
    },
    {
      text: '%',
      category: 'other',
    },
    {
      text: '÷',
      category: 'operator',
    },
    {
      text: '7',
      category: 'other',
    },
    {
      text: '8',
      category: 'other',
    },
    {
      text: '9',
      category: 'other',
    },
    {
      text: 'x',
      category: 'operator',
    },
    {
      text: '4',
      category: 'other',
    },
    {
      text: '5',
      category: 'other',
    },
    {
      text: '6',
      category: 'other',
    },
    {
      text: '-',
      category: 'operator',
    },
    {
      text: '1',
      category: 'other',
    },
    {
      text: '2',
      category: 'other',
    },
    {
      text: '3',
      category: 'other',
    },
    {
      text: '+',
      category: 'operator',
    },
    {
      text: '0',
      category: 'other span-2-col',
    },
    {
      text: '.',
      category: 'other',
    },
    {
      text: '=',
      category: 'operator',
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
            category={item.category}
            keyValue={item.text}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
