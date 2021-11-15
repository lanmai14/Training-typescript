import React from "react";

const personTips = [5, 10, 15, 25, 50];

const CalcIn: React.FC = (props) => {
  const [bill, setBill] = React.useState<number>(0);
  const [tip, setTip] = React.useState<number>(0);
  const [person, setPerson] = React.useState<number>(0);

  const handelChange = () => {};
  return (
    <div className="calculator">
      <div className="calculator__form">
        <div className="calculator__control">
          <label className="calculator__control--label" htmlFor="bill">
            Bill
          </label>
          <span className="invalid" id="invalid-bill">
            Don't smaller than 1{" "}
          </span>
          <input
            type="number"
            name="bill"
            id="bill"
            value={bill}
            data-index="bill"
            className="calculator__control--input calculator__control--bill"
          />
        </div>
        <div className="calculator__control">
          <label className="calculator__control--label" htmlFor="select">
            Select Tip %
          </label>
          <div className="calculator__control--select">
            {personTips.map((tipValue) => (
              <button
                className={`btn tip--btn ${tipValue === tip && "active"}`}
                data-index={tipValue}
                // onClick={() => handleBtnTip(tipValue)}
              >
                {tipValue}%
              </button>
            ))}

            <input
              className="calculator__control--input calculator__control--custom"
              type="number"
              data-index="custom"
              placeholder="Custom"
            />
          </div>
        </div>
        <div className="calculator__control">
          <label className="calculator__control--label" htmlFor="person">
            Number of people
          </label>
          <span className="invalid" id="invalid-person">
            Don't smaller than 1
          </span>
          <input
            type="number"
            name="people"
            id="person"
            value={person}
            data-index="person"
            className="calculator__control--input calculator__control--person"
            // placeholder={0}
            // value={data.people}
            // onChange={handelChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CalcIn;
