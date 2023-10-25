import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Components/Card';
import { useParams } from 'react-router-dom';

function Cards() {
  const cardata = useSelector((state) => state.cars.cars);
  const searchItem = useSelector((state) => state.cars.searchItem);
  const dispatch = useDispatch();
  const { page_num } = useParams();
  const [len, setLen] = useState(0);

  const filteredCars = cardata.filter((car) =>
    car.car_name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const slicedata = cardata.slice(6 * (page_num - 1), 6 * page_num);

  useEffect(() => {
    // Calculate slicedata length inside the useEffect hook
    setLen(slicedata.length);
  }, [slicedata]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-0' style={{ transform: 'scale(0.8)' }}>
      {(searchItem === '' && len!=0) ? (
        slicedata.map((car) => (
          <div className='flex items-center justify-center  bg-slate-50 border border-gray-200 rounded-lg p-0 mr-0' key={car.id}>
            <Card
              id={car.id}
              range={car.range}
              carName={car.car_name}
              page={car.page}
              image={car.image}
              type={car.type}
              service={car.service}
              emi={car.EMI}
              speed={car.speed}
            />
          </div>
        ))
      ) : len === 0 ? (
        cardata.slice(0, 6).map((car) => (
          <div className='flex items-center justify-center  bg-slate-50 border border-gray-200 rounded-lg p-0 mr-0' key={car.id}>
            <Card
              id={car.id}
              range={car.range}
              carName={car.car_name}
              page={car.page}
              image={car.image}
              type={car.type}
              service={car.service}
              emi={car.EMI}
              speed={car.speed}
            />
          </div>
        ))
      ) : (
        filteredCars.map((car) => (
          <div className='flex items-center justify-center  bg-slate-50 border border-gray-200 rounded-lg p-2 mr-6' key={car.id}>
            <Card
              id={car.id}
              range={car.range}
              carName={car.car_name}
              page={car.page}
              image={car.image}
              type={car.type}
              service={car.service}
              emi={car.EMI}
              speed={car.speed}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Cards;
