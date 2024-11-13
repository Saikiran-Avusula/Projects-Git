import { createContext } from "react";

export const userThemeContext = createContext("initial Value")
// default value will not effecting, it will render the wrapped value as from provider not fromconsumer value 
