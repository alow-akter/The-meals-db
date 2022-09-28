import React from 'react';
import './Foody.css'
const Foody = (foody) => {
    return (
        <div className='my-food'>
            <h2>Foods Summary </h2>
            <p>Selected Items : {foody.foody.length}</p>
            <p>{foody.foody}</p>
        </div>
    );
};

export default Foody;