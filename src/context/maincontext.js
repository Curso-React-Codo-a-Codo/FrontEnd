import React from "react";

const defaultState = {
  language: "es",
  darkMode: true,
  username: "anon",
};

function getInitialState() {
  return defaultState;
}

export const mainContext = React.createContext(getInitialState());
