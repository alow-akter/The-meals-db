import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Foody from '../Foody/Foody';

import './Foods.css'


const Foods = () => {
    const [meals, setFoods] = useState([]);
    const [foody, setFoody] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, []);

    const handleToClick = (food) => {
        const newFood = [...foody, food]
        setFoody(newFood)
    }
    console.log(foody)
    return (
        <div className="main-container">

            <div className='foods-container'>

                {meals.map(food => <Food food={food} handleToClick={handleToClick}> </Food>)}
            </div>
            <div className='foody-container '>
                <Foody foody={foody}></Foody>

            </div>
        </div>
    );
};

export default Foods;