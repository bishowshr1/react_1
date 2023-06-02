import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [err, setErr] = useState('');
  const [call, setCall] = useState(false);

  const nav = useNavigate();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data['categories']);
    } catch (err) {
      setLoad(false);
      setErr(err);
    }

  }
  useEffect(() => {
    getData();
  }, [call]);

  if (isLoad) {
    return <h1>Loading....</h1>
  }



  return (
    <div className='grid grid-cols-3 items-start p-9 gap-7 '>
      {data.map((meal) => {
        return <div onClick={() => {
          nav(`/detail_page/${meal.strCategory}`, { state: meal });
        }} key={meal.idCategory} className='space-y-3 shadow-2xl p-5 cursor-pointer'>
          <h1 className='text-center text-2xl font-bold'>{meal.strCategory}</h1>
          <img className='w-full' src={meal.strCategoryThumb} alt="" />
          <p>{meal.strCategoryDescription.substring(0, 100) + '....'}</p>
        </div>
      })}

    </div>
  )
}

export default HomePage
