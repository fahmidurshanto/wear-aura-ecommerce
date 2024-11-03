import React, { useState } from "react";
import ProductCards from "./ProductCards";
import products from "../../data/products.json";

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
      setVisibleProducts((prevCount) => prevCount + 4);
    };
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader">
        Design your dream jersey or t-shirt, your way
      </p>
      {/* Products card */}
      <ProductCards className="mt-12" products={products.slice(0, visibleProducts)}></ProductCards>

      {/* Load more products btn */}
      <div className="product__btn my-8">
            {
                visibleProducts < products.length && <button className="btn" onClick={loadMoreProducts}>Load More</button>
            }
      </div>
    </section>
  );
};

export default TrendingProducts;
