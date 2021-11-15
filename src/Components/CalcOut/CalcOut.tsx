import React from "react";

const CalcOut = () => {
  const [amount, setAmount] = React.useState<string>("00.00");
  const [total, setTotal] = React.useState<string>("00.00");

  const handleCalc = () => {};
  const handleReset = () => {};
  return (
    <div className="calculator__result">
      <div className="calculator__result-container">
        <div className="calculator__result-group">
          <label className="calculator__result--label">
            Tip Amount <span>/person</span>
          </label>
          <p className="calculator__result--tip">{amount}</p>
        </div>
        <div className="calculator__result-group">
          <label className="calculator__result--label">
            Total <span>/person</span>
          </label>
          <p className="calculator__result--total">{total}</p>
        </div>
      </div>
      <div className="calculator__result-control">
        <button className="btn btn--calculator" onClick={handleCalc}>
          Calculator
        </button>
        <button className="btn btn--reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CalcOut;
