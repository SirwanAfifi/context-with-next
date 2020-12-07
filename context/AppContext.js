import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const users = ["Sirwan", "Kaywan", "Sana", "Sir1", "Kay1"];

export const AppWrapper = ({ children }) => {
  const [user, setUser] = useState("Sirwan Afifi");
  let sharedState = {
    user,
    updateUsername: () => {
      setUser(users[Math.round(Math.random() * users.length)] || "Sirwan");
    },
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
