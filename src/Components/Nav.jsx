import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { searchitem } from '../Feature/carSlice';

function Nav() {
    const searchItem=useSelector(state=>state.cars.searchItem);
    const dispatch=useDispatch();

    const changeHandler=(e)=>{
        dispatch(searchitem(e.target.value));
    }

    const handleFormSubmit = (e) => {
      e.preventDefault(); // Prevent the form from being submitted
    };

  return (
    <div className=' bg-slate-400 rounded-sm border-2 min-w-screen-48 mx-6 border-slate-900 p-3 box-border'>
      <form className=' bg-inherit' onSubmit={handleFormSubmit}>
       <input
        type="text"
        className='w-1/3 h-full'
        placeholder="Search.." 
        name="search"
        value={searchItem}
        onChange={changeHandler}
         />
     <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
    
    
  )
}

export default Nav
