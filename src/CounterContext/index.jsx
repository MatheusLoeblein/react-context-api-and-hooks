import P from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const initialState = {
  counter: 0,
  loading: false,
};
const Context = createContext([1, 2]);

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  return [...context];
};
