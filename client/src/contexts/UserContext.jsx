
import { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // User global state
  const [user, setUser] = useState({
    email: localStorage.getItem("email"),
    posts: [],
  });

 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
