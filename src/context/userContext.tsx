import React, { useState, createContext, useContext } from "react";

export interface IUser {
  userInfo: any, 
  setUserInformation: Function, 
  sellCrypto: any, 
  setSellCrypto: Function,  
  transactionDetail: any, 
  setTransactionDetail: Function,  
}

export const UserContext = React.createContext({} as IUser); 

export const useUser = () => useContext(UserContext);

export const UserContextProvider = (props: any) => {
  const [userInfo, setUserInformation] = useState({} as any);   
  const [sellCrypto, setSellCrypto] = useState({} as any);    
  const [transactionDetail, setTransactionDetail] = useState("");    

  return <UserContext.Provider value={{
      userInfo, 
      setUserInformation, 
      sellCrypto, 
      setSellCrypto, 
      transactionDetail, 
      setTransactionDetail, 
    }}>
    {
        props.children
    }</UserContext.Provider>;
};
