
// import  { createContext ,useReducer } from "react";
// import { reducer, initialState } from "../../Utility/reducer";




// export const DataContext = createContext()

//   export const DataProvider=({children,})=>{
//     return(
//         <DataContext.Provider value={useReducer( children,reducer,initialState)}>
//          {children}
//         </DataContext.Provider>
//     )
// }
import { createContext, useReducer } from "react";
// import { reducer, initialState } from "../../Utility/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  // Initialize the reducer with the correct arguments

  return (
    <DataContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </DataContext.Provider>
  )
}
