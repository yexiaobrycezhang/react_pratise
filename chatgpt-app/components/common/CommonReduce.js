"use client";
import { MdLightMode } from "react-icons/md";
import { createContext, useReducer, useContext } from "react";

const initialState = {
  show: false,
  themeMode: "dark",
};

export const CommonContext = createContext(null);
export const useCommonContext = () => useContext(CommonContext);

function chatGptReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      let newState = { ...state, [action.fieldId]: action.fieldValue };
      console.log("action", action);
      console.log("newState", newState);
      // return { ...state, [action.fieldId]: action.fieldValue };
      return newState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
  console.log("action", action);
  console.log("state", state);
}

export default function CommonReduce({ children }) {
  const [state, dispatch] = useReducer(chatGptReducer, initialState);
  console.log("state reducer", state);
  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      {children}
    </CommonContext.Provider>
  );
}
