import { createContext, useState } from "react";
export const SearchContext =createContext();

export const SearchContextProvider = ({children})=>{
        const [value , setValue] = useState('');
        const [upArrow, setUpArrow] = useState(false);
    return(
        <SearchContext.Provider value={{value  , setValue , upArrow , setUpArrow}}>
            {children}
        </SearchContext.Provider>
    )
}