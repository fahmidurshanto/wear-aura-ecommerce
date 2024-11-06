import React, { useEffect, useState } from 'react';
import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState, setFiltersState] = useState({
        category: "all",
        size:  "all",
    })
    const filters = {
        categories: ["all", "tshirt", "jersey", "polo"],
        sizes: ["all","M","L","XL","XXL"]
    }

    // filtering function
    const appliedFilters = () =>{
        let filteredProducts = productsData;
        // filter by categories
        if(filtersState.category && filtersState.category !== "all"){
            filteredProducts = filteredProducts.filter(product => product.category === filtersState.category)
        }
        // filter by size
        if(filtersState.size && filtersState.size !== "all"){
            filteredProducts = filteredProducts.filter(product => product.size === filtersState.size)
        }

        setProducts(filteredProducts)
    }

    useEffect(() => {
        appliedFilters();
    }, [filtersState]);

    const clearFilters = () =>{
        setFiltersState({
            category: "all", 
            size: "all"
        })
    }

    return (
        <>
             <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">Shop Page</h2>
                <p className="section__subheader">Welcome to Wear Aura! Your Ultimate Destination for Premium T-Shirts, Polo T-Shirts, and Jerseys! Discover our exclusive collection crafted for comfort, style, and durability.</p>
            </section>

            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left side */}
                    <ShopFiltering 
                    filters={filters} 
                    filtersState={filtersState} 
                    setFiltersState={setFiltersState} 
                    clearFilters={clearFilters}></ShopFiltering>



                    {/* right side */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Products Available</h3>
                        <ProductCards products={products}></ProductCards>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;