import { createContext } from "react";
import { AppContextType } from "../Dto";

const initialState: AppContextType = {
  query: {},
  setQuery: () => {},
};

export const AppContext = createContext(initialState);
