import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container" id="main-container">
        <div>
          <input
            type="number"
            className="display-calc grey"
            id="display-Calc"
            readOnly
            placeholder="0"
          />
        </div>
        <div className="buttons">
          <button type="button" className="white AC">
            AC
          </button>
          <button type="button" className="white plus-minus">
            +/-
          </button>
          <button type="button" className="white percent">
            %
          </button>
          <button type="button" className="orange divide">
            ÷
          </button>
          <button type="button" className="white number-btn">
            7
          </button>
          <button type="button" className="white number-btn">
            8
          </button>
          <button type="button" className="white number-btn">
            9
          </button>
          <button type="button" className="orange multiply">
            x
          </button>
          <button type="button" className="white number-btn">
            4
          </button>
          <button type="button" className="white number-btn">
            5
          </button>
          <button type="button" className="white number-btn">
            6
          </button>
          <button type="button" className="orange subtract">
            -
          </button>
          <button type="button" className="white number-btn">
            1
          </button>
          <button type="button" className="white number-btn">
            2
          </button>
          <button type="button" className="white number-btn">
            3
          </button>
          <button type="button" className="orange addition">
            +
          </button>
          <button type="button" className="zero">
            0
          </button>
          <button type="button" className="white decimal">
            .
          </button>
          <button type="button" className="orange equal">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;