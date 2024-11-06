import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json"
import ProductCards from "../Shop/ProductCards";

const CategoryPage = () => {
    const {categoryName} = useParams();
    console.log(useParams())
    const [filteredProduct, setFilteredProduct] = useState([]);
    useEffect(() =>{
        const filtered = products.filter((product) => product.category === categoryName.toLowerCase());
        console.log(filtered)

        setFilteredProduct(filtered)
    }, [categoryName]);

    useEffect(() =>{
        window.scrollTo(0,0)
    })
    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">{categoryName}</h2>
                <p className="section__subheader">Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
            </section>

            <div className="section__container">
                <ProductCards products={filteredProduct}></ProductCards>
            </div>
        </>
    );
};

export default CategoryPage;