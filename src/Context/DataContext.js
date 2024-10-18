import { createContext } from "react";
import { useState } from "react";

export const myContext = createContext()

  export function SayName({children}){
    const [myName, setMyName] = useState("")
    const [gender, setGender] = useState("")

    return <myContext.Provider value={{myName, setMyName, gender, setGender}}>{children}</myContext.Provider>
}