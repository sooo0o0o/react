import React, { createContext, useState } from "react";

//Context생성
const UserContext = createContext();

//Provider
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]); //빈 배열로 초기화해주는것

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
