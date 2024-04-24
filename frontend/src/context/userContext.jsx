import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../url";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);



 

  return (
    <UserContext.Provider value={{username, setUsername}}>
      {children}
    </UserContext.Provider>
  );
}
