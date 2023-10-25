import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai';
import {BsPeople} from 'react-icons/bs';
import {BsFuelPumpDiesel} from 'react-icons/bs';
import {PiSteeringWheelBold} from 'react-icons/pi';
import {RiSteeringFill} from 'react-icons/ri';
function Card({id,carName,page,image,range,type,speed,service,emi}) {
  return (
    <div>
      {/* car card  */}
      <div>
       
       <div className='w-80 h-96 bg-red  shadow-lg rounded-lg mt-10 ml-10'>
         <div className='mx-6 '>
         <img src={image} alt="car" className='h-48  items-center rounded-lg' />
         </div>
         <div className='flex justify-between mx-5'>
         <h2 className='font-bold mt-5 '>{carName}</h2>
         
         <button className='mt-5 px-2 border-sky-500/50 border-2 border-dashed rounded-xl'><span className='text-sm font-medium'>2021</span></button>
         </div>
         <div className='flex justify-between mx-5 my-5'>
         <div className=' '>
            <div className='flex gap-1'>
             <div className='text-sky-500 mt-1'><BsPeople/></div> 
             <h4 className=''>{range}</h4>
             </div>
             <div className='flex gap-1'>
              <div className='text-sky-500 mt-1'><PiSteeringWheelBold/></div>  
             <h4>{speed}</h4>
             </div>
         </div>
         <div className='mr-8'>
             <div className='flex gap-1'> 
             <div className='text-sky-500 mt-1'><BsFuelPumpDiesel/></div> 
              <h4>{type}</h4>
              </div>
              <div className='flex gap-1'> 
              <div className='text-sky-500 mt-1'><RiSteeringFill/></div> 
              <h4>{service}</h4>
              </div>
         </div>
         </div>
         <div className='w-68 mx-5'> <hr /> </div>
         <div className='flex justify-between mx-5 mt-5'>
         <h1 className='font-semibold'>{emi}</h1>
         <div className='text-sky-500 ml-10 bg-sky-500/[.20] rounded-xl w-5 px-4 '> <AiOutlineHeart/> </div>
         <button className='rounded-xl text-center px-2 py-1 bg-sky-500'><span className=' text-xs font-semibold text-white'> Rent Now</span></button>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Card
