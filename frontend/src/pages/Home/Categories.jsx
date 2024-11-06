import React from 'react';
import category2 from "../../assets/t-shirt.jpeg"
import category3 from "../../assets/jersey.jpg";
import category4 from "../../assets/polo-tshirt.jpeg";
import { Link } from 'react-router-dom';

const Categories = () => {

    const categories = [
        {name: "T Shirt", path: "tshirt", image: category2},
        {name: "Jersey", path: "jersey", image: category3},
        {name: "Polo T Shirt", path: "polo", image: category4},
    ]

    return (
        <div>
            
        // <h2 className="section__header">Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 mt-8 w-[50%] mx-auto'>
            {
                categories.map((category) =>(
                    <Link key={category.name} to={`/categories/${category.path}`} className="categories__card">
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }
        </div>
        </div>
    );
};

export default Categories;