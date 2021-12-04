/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, SetTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (value) => {
    const result = calculate({ total, next, operation }, value);
    setNext(result.next);
    setOperation(result.operation);
    SetTotal(result.total);
  };

  const display = () => {
    if (next) {
      return next;
    }
    if (operation) {
      return operation;
    }
    if (total) {
      return total;
    }
    return 0;
  };
  
  return (
    <div className="main-container" id="main-container">
      <div>
        <input
          type="number"
          className="display-calc grey"
          id="display-Calc"
          readOnly
          value={display()}
        />
      </div>
      <div className="buttons">
        <button
          type="button"
          className="white AC"
          onClick={() => handleClick('AC')}
        >
          AC
        </button>
        <button
          type="button"
          className="white plus-minus"
          onClick={() => handleClick('+/-')}
        >
          +/-
        </button>
        <button
          type="button"
          className="white percent"
          onClick={() => handleClick('%')}
        >
          %
        </button>
        <button
          type="button"
          className="orange divide"
          onClick={() => handleClick('÷')}
        >
          ÷
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('7')}
        >
          7
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('8')}
        >
          8
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('9')}
        >
          9
        </button>
        <button
          type="button"
          className="orange multiply"
          onClick={() => handleClick('x')}
        >
          x
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('4')}
        >
          4
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('5')}
        >
          5
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('6')}
        >
          6
        </button>
        <button
          type="button"
          className="orange subtract"
          onClick={() => handleClick('-')}
        >
          -
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('1')}
        >
          1
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('2')}
        >
          2
        </button>
        <button
          type="button"
          className="white number-btn"
          onClick={() => handleClick('3')}
        >
          3
        </button>
        <button
          type="button"
          className="orange addition"
          onClick={() => handleClick('+')}
        >
          +
        </button>
        <button type="button" className="zero" onClick={() => handleClick('0')}>
          0
        </button>
        <button
          type="button"
          className="white decimal"
          onClick={() => handleClick('.')}
        >
          .
        </button>
        <button
          type="button"
          className="orange equal"
          onClick={() => handleClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
