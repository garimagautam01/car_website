// import React from 'react'
import {GrLinkPrevious} from 'react-icons/gr';
import {GrLinkNext} from 'react-icons/gr';

const Footer = () => {
  return (
    <>
    <body  className='flex flex-col min-h-screen'>
    <footer className='mt-auto '>
      <div className=' flex bg-slate-200 rounded-xl h-20 mx-8  gap-10 justify-between   '>
        <h5 className='px-2 py-8 mx-2'>6 of 129</h5>
        <div className='inline-block'>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'><GrLinkPrevious/> </a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>1</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>2</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>3</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>4</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>5</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>6</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>7</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>8</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>9</a>
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'>10</a>        
           <a href="#" className='float-left px-3 py-3 bg-gray-50 mx-1  mt-7 h-1 rounded-lg'><GrLinkNext/></a>  
       </div>
        </div> 
    </footer>
    </body>
    </>
  )
}

export default Footer;
