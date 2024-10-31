import React from 'react';
import category1 from "../../assets/undergarment.jpeg";
import category2 from "../../assets/t-shirt.jpeg";
import category3 from "../../assets/jersey.jpg";
import category4 from "../../assets/polo-tshirt.jpeg";
import { Link } from 'react-router-dom';

const Categories = () => {

    const categories = [
        {name: "Under Garments", path: "under_garments", image: category1},
        {name: "T-shirts", path: "t_shirt", image: category2},
        {name: "Jersey", path: "jersey", image: category3},
        {name: "Polo T-shirt", path: "polo_t_shirt", image: category4},
    ]
    console.log(categories)

    return (
        <div className='product__grid'>
            {
                categories.map((category) =>(
                    <Link key={category.name} to={`/categories/${category.path}`} className="categories__card">
                        <img src={category.image} alt={category.name} />
                        <h4>{category.name}</h4>
                    </Link>
                ))
            }
        </div>
    );
};

export default Categories;