


import React, { useContext } from 'react'
import { ThemeContext } from './App'

function Child() {

    const {theme, setTheme} = useContext(ThemeContext);

    console.log(theme, " on  child");
    
    const handleColor = ()=>{
        const isColor = theme!=='black' ? 'black' : 'white'
        setTheme(isColor);
    }

  return (
    <div style={{background:`${theme}`, height:"100vh", width:"100%" , border:"2px solid red"}} >
        <div>
            <button onClick={handleColor}>Change Color</button>
        </div>

        <h1 style={{color:theme }}>Theme change use Context</h1>
      
    </div>
  )
}

export default Child
