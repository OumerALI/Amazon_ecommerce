
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
import { reducer, initialState } from "../../Utility/reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Initialize the reducer with the correct arguments
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
