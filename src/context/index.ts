import { createContext } from "react";
import { AppContextType } from "../Dto";

const initialState: AppContextType = {
  appState: {},
  setAppState: () => {},
};

export const AppContext = createContext(initialState);
