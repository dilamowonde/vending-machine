import React from 'react'
import ThemeProvider from './contexts/Themecontext';
import Vending from './vendingmachine'

function App() {
  return   (
  

      <div className="App overflow-hidden  h-screen w-screen" >
        {/* <Vending/> */}
        <ThemeProvider/>
      </div>
   
  );
}

export default App;
