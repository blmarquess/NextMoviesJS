import { createContext } from "react";

const initialState = {
  user: {
    name: "",
    email: "",
    tel: "",
  },
  isLoggedIn: false,
  playlists: [],
}

export const DataContext = createContext(initialState);

const DataContextProvider = DataContext.Provider;

type IProviderProps = {
  children: JSX.Element;
}

const DataProvider = ({ children }: IProviderProps): JSX.Element => {
  return (<div>state</div>);
};

export default DataProvider;