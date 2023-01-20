import { createContext, useContext, useReducer } from "react"
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";


const StoreContext = createContext();


export const useStore = () => useContext(StoreContext)



export const StoreProvider = ({children}) => {

    const [counterState,dispatchCounter] = useReducer(counterReducer,counterInitialState)

return (
    <StoreContext.Provider value={{counterState,dispatchCounter}}>

    {children}

    </StoreContext.Provider>
)



}