import React, { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";

import "./App.css";
import {
  applyNumber,
  changeOperationAction,
  clearDisplay,
  clearMemory,
  setMemory,
  solveEquation,
} from "./actions/index";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number.toString()));
  };

  const handleChangeOperation = (sym) => {
    dispatch(changeOperationAction(sym));
  };
  console.log(state.num1);
  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleSetMemory = () => {
    dispatch(setMemory());
  };
  const handleClearMemory = () => {
    dispatch(clearMemory());
  };
  const handleSolve = () => {
    dispatch(solveEquation());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleSetMemory()} value={"M+"} />
              <CalcButton
                onClick={() => handleApplyNumber(state.memory)}
                value={"MR"}
              />
              <CalcButton onClick={() => handleClearMemory()} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1} />
              <CalcButton onClick={() => handleApplyNumber(2)} value={2} />
              <CalcButton onClick={() => handleApplyNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4} />
              <CalcButton onClick={() => handleApplyNumber(5)} value={5} />
              <CalcButton onClick={() => handleApplyNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7} />
              <CalcButton onClick={() => handleApplyNumber(8)} value={8} />
              <CalcButton onClick={() => handleApplyNumber(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => handleChangeOperation("+")}
                value={"+"}
              />
              <CalcButton
                onClick={() => handleChangeOperation("*")}
                value={"*"}
              />
              <CalcButton
                onClick={() => handleChangeOperation("-")}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClearDisplay()} value={"CE"} />
              <CalcButton onClick={() => handleSolve()} value={"="} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
