


import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import Child from './Child';

// create Context


// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();


function App() {

  // prop driling work passing props to another component then another component passing props
  // target component then come useContext hook help to passing data without prop driling 
  // passing data one component to another component 

   /// createContext 
  //  wrap child
  /// recive value on child component

  const [ theme , setTheme ] = useState("white");

  console.log(theme)





  
 
  


  return (
    <div>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Child/>

      </ThemeContext.Provider>
      
    </div>
  )
}

export default App





