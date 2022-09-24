import React from 'react';

const Meal = (props) => {
    const {
        idMeal,
        strMeal,
        strArea,
        strCategory,
        strMealThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strInstructions,
        strSource,
        strTags,
        strYoutube,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,

    } = props.meal;
    return (
        <div className="card glass">
            <figure><img src={strMealThumb} alt="Meal Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold uppercase my-2">Name: {strMeal}</h2>
                <div className='flex justify-between'>
                    <h3 className="font-medium">{strArea}</h3>
                    <h3 className="font-medium">{strCategory}</h3>
                </div>
                <p className='text-justify my-3'>{strInstructions > 300 ? strInstructions : strInstructions.slice(0, 250)}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-danger">Order Now</button>
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;
