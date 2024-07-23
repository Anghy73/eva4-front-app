import { useReducer, createContext } from 'react'
import { reducer, reducerInitialState } from '../reducer/reducer'

export const DevsContext = createContext()

export function DevsProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, reducerInitialState)

  const addDev = product => dispatch({
    type: 'ADD_DEV',
    payload: product
  })

  const updateDev = product => dispatch({
    type: 'UPDATE_DEV',
    payload: product
  })

  return (
    <DevsContext.Provider value={{
      devs: state,
      addDev,
      updateDev
    }}
    >
      {children}
    </DevsContext.Provider>
  )
}
