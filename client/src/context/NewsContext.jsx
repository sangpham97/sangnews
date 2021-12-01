import { createContext, useEffect, useReducer } from 'react'
import Reducer from './NewsReducer'

const INITIAL_STATE = {
  News: [],
  isFetching: false,
  error: false,
}

export const NewsContext = createContext(INITIAL_STATE)

export const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

  return (
    <NewsContext.Provider
      value={{
        News: state.News,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
