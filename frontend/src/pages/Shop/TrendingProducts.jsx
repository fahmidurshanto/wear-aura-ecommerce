import React from 'react';
import ProductCards from './ProductCards';
import products from '../../data/products.json'

const TrendingProducts = () => {
    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader'>Design your dream jersey or t-shirt, your way</p>
            <ProductCards products={products}></ProductCards>
        </section>
    );
};

export default TrendingProducts;