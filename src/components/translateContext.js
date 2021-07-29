import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

let LangContext = React.createContext()

export default function LangsProvider({ children }) {
    const userLanguage = navigator.language.split('-')[0]
    const [Lang, setLang] = useState(userLanguage)
    
    useEffect(()=>{
        console.log(navigator.languages)
    })

    return (<LangContext.Provider value={{ Lang, setLang }}>
        {children}
    </LangContext.Provider >)
}

export function useLangContext() {
    return useContext(LangContext)
}