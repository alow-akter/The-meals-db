import React from 'react';
import './Food.css'
const Food = (props) => {
    const { strMealThumb, strMeal, strCategory, } = props.food;
    const { handleToClick } = props;

    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div className='text'>
                <h2>{strMeal}</h2>
                <h3>{strCategory}</h3>

            </div>
            <button onClick={() => handleToClick(strMeal)} className='btn-meals'>
                <p> Add To Meals</p>
            </button>
        </div>
    );
};

export default Food;