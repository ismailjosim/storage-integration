import { list } from 'postcss';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Meal from './Meal/Meal';

const Foods = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);
    return (
        <div className='my-5'>
            <div className='grid grid-cols-3 gap-5 w-10/12 mx-auto my-5'>
                {
                    meals.map(meal => <Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    )
};

export default Foods;
