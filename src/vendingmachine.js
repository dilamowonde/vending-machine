import React from 'react'
import VendingMachine from './components/vendingmachine'
import Chips from './components/chips';
import Sardines from './components/sardines';
import { Routes, Route, Link } from "react-router-dom";
import Soda from './components/soda';



function Vending() {
  return   (
    <div className=" overflow-hidden  h-screen w-screen" >
      <nav className='w-full'>
        <div className='flex justify-between gap-x-2 bg-gray-800 text-white' >
            <Link to="/" className=' flex-1'>Home</Link>
            <Link to="/chips" className=' flex-1'>Chips</Link>
            <Link to="/sardines" className=' flex-1'>Sardines</Link>
            <Link to="/soda" className=' flex-1'>Soda</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<VendingMachine/>}/>
        <Route path='/chips' element={<Chips/>}/>
        <Route path='/sardines' element={<Sardines/>}/>
        <Route path='/soda' element={<Soda/>}/>
      </Routes>
    
    </div>
  );
}

export default Vending ;

