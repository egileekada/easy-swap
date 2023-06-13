import React, { useState, createContext, useContext } from "react";

export interface IUser {
  userInfo: any, 
  setUserInformation: Function, 
  sellCrypto: any, 
  setSellCrypto: Function,  
  transactionDetail: any, 
  setTransactionDetail: Function,  
  userEmail: any, 
  setUserEmail: Function,  
  seacrhBank: any, 
  setSeacrhBank: Function
}

export const UserContext = React.createContext({} as IUser); 

export const useUser = () => useContext(UserContext);

export const UserContextProvider = (props: any) => {
  const [userInfo, setUserInformation] = useState({} as any);   
  const [sellCrypto, setSellCrypto] = useState({} as any);    
  const [transactionDetail, setTransactionDetail] = useState("");    
  const [userEmail, setUserEmail] = useState("");    
  const [seacrhBank, setSeacrhBank] = useState("");    

  return <UserContext.Provider value={{
      userInfo, 
      setUserInformation, 
      sellCrypto, 
      setSellCrypto, 
      transactionDetail, 
      setTransactionDetail, 
      userEmail, 
      setUserEmail,  
      seacrhBank,
      setSeacrhBank
    }}>
    {
        props.children
    }</UserContext.Provider>;
};
