import { createContext, useState } from "react";

export const WelcomeContext = createContext();

export const WelcomeProvider = ({ children }) => {
    const [welcome, setWelcome] = useState(false);

    return <WelcomeContext.Provider value={{ welcome, setWelcome }}>
        {children}
    </WelcomeContext.Provider>
}