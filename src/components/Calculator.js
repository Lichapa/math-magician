import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((previousState) => calculate(previousState, e));
  };

  render() {
    const { total, next, operation } = this.state;
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
            onClick={() => this.handleClick('AC')}
          >
            AC
          </button>
          <button
            type="button"
            className="white plus-minus"
            onClick={() => this.handleClick('+/-')}
          >
            +/-
          </button>
          <button
            type="button"
            className="white percent"
            onClick={() => this.handleClick('%')}
          >
            %
          </button>
          <button
            type="button"
            className="orange divide"
            onClick={() => this.handleClick('÷')}
          >
            ÷
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('7')}
          >
            7
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('8')}
          >
            8
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('9')}
          >
            9
          </button>
          <button
            type="button"
            className="orange multiply"
            onClick={() => this.handleClick('x')}
          >
            x
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('4')}
          >
            4
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('5')}
          >
            5
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('6')}
          >
            6
          </button>
          <button
            type="button"
            className="orange subtract"
            onClick={() => this.handleClick('-')}
          >
            -
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('1')}
          >
            1
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('2')}
          >
            2
          </button>
          <button
            type="button"
            className="white number-btn"
            onClick={() => this.handleClick('3')}
          >
            3
          </button>
          <button
            type="button"
            className="orange addition"
            onClick={() => this.handleClick('+')}
          >
            +
          </button>
          <button
            type="button"
            className="zero"
            onClick={() => this.handleClick('0')}
          >
            0
          </button>
          <button
            type="button"
            className="white decimal"
            onClick={() => this.handleClick('.')}
          >
            .
          </button>
          <button
            type="button"
            className="orange equal"
            onClick={() => this.handleClick('=')}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
