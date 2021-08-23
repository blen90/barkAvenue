/* eslint-disable no-undef */
import { createContext, useContext } from "react"

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const AppProvider = ({children}) => {
  // The functions in providerVals were passed in from App.js and are 
  // accessible here because of the destructing of "children" above
  // This makes these functions available anywhere the context is accessed
  const providerVals = { appState, setAppState }

  return (
    <AppContext.Provider value={providerVals}>
      {children}
    </AppContext.Provider>
  )
}

const AppConsumer = AppContext.Consumer
export { AppContext, AppProvider, AppConsumer }