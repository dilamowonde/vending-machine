import React, {useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {ThemeContext} from './../contexts/Themecontext'


function Chips() {
  const value = useContext(ThemeContext);
  console.log(value)
  const [chip,setChip] = useState({
    chips:[
     
    ]
  })
  const rand = ()=>{
    return [(Math.floor(Math.random()*window.innerHeight)),(Math.floor(Math.random()*window.innerWidth))]
  }
  const Addchips = ()=>{

    setChip({
      chips:[
        ...chip.chips,
        rand()
      ]
    })
  }
  return (
    <div className="relative h-full w-full  flex justify-center items-center">
      <div className=' w-full h-full absolute opacity-70 bg-no-repeat bg-cover bg-center' ></div>

        {chip.chips.map(c =>{
          let style = {top:`${c[0]}px`,left:`${c[1]}px`}
          let classes = ` bg-chip bg-no-repeat z-3 w-32 h-32 bg-cover bg-center absolute bottom-${c[0]} right-${c[1]}`
          return (<div key={uuidv4()} style={style  } className= {classes}> </div>)
        })}
     
      <button className=' shadow-md bg-orange-500 p-4 text-lg font-bold  text-white rounded-xl relative ' onClick={Addchips}>Add Chips</button>
    </div>
  );
}

export default Chips;
