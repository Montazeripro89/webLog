import './App.css'
import Header from './components/Header/Header'
import { useState } from 'react';

function App() {

  let [darkMode , setDarkMode] = useState(false);

  let Functions = [
    {
      id : 1,
      name : 'handlerDarkMode',
      function : function handlerDarkMode() {
        if(darkMode) {
          setDarkMode(false)
        }else {
          if(!darkMode) {
            setDarkMode(true)
          }
        }
      },
      section : 'Header',
    }
  ]

  return (
    <>
      <body style={{backgroundColor : darkMode ? 'black' : 'white'}}>
        <Header Mode={darkMode} Functions={Functions.filter(item => item.section === 'Header')}/>
      </body>
    </>
  )
}

export default App