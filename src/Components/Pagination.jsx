import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
function Pagination() {
  const total_pages = useSelector(state => (state.cars.cars.length/6));
  const pagesArray = Array.from({ length: total_pages }, (_, index) => index + 1);
  // console.log()
  return (
    <div className='flex items-center justify-center border-4'>
      <div className='pagination border-slate-600 p-2'>
        {/* <Link to="#" className='text-black block float-left px-8 py-2 no-underline hover:bg-gray-300'>&laquo;</Link> */}
        {pagesArray.map((page, index) => (
          <Link key={index} to={`/page/${page}`} className='text-black block float-left px-8 py-2 no-underline hover:bg-gray-300'>
            {page}
          </Link>
        ))}
        {/* <Link to="#" className='text-black block float-left px-8 py-2 no-underline hover:bg-gray-300'>&raquo;</Link> */}
      </div>
    </div>
  );
  
  
}

export default Pagination;
