import { useContext, createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState([]);
  const [updateUser, setUpdateUser] = useState(null);

  let value = {
    count,
    setCount,
    userData,
    setUserData,
    updateUser,
    setUpdateUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
