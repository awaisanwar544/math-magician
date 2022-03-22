import React from 'react';
import Calculator from './Calculator';

const CalculatorPage = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h2>Let&apos;s do some Math</h2>
    <Calculator className="calculator" />
  </div>
);

export default CalculatorPage;
