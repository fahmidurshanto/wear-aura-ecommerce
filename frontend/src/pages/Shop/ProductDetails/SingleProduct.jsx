import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Product Page</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary cursor-pointer">
            <Link to="/">Home</Link>
          </span>{" "}
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary cursor-pointer">
            <Link to="/shop">Shop</Link>
          </span>{" "}
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary cursor-pointer">
            Product Name
          </span>
        </div>
      </section>

      <section className="section__container">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2 w-full">
            <img
              className="rounded-md w-full h-auto"
              src="https://media.istockphoto.com/id/182790712/photo/soccer-jerseys.jpg?s=1024x1024&w=is&k=20&c=DBf-SyPzCzdGjSWnElzGtQ75R3b_ppozjjrRiXAnwAA="
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">Product Name</h3>
            <p className="text-xl text-primary">
            ৳100 <s>৳130</s>
            </p>
            <p className="text-gray400 mb-4">
              Product description will be here
            </p>

            {/* additional product info */}
            <div>
              <p>
                <strong>Category: </strong>accessories
              </p>
              <p>
                <strong>Color: </strong>colors
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStars rating={"5"}></RatingStars>
              </div>
            </div>

            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md">Add to Cart</button>
          </div>
        </div>
      </section>

{/* Display reviews */}
{/* TODO: work with the api when will have api */}
      <section className="section__container mt-8">
        Reviews will be here
      </section>
    </>
  );
};

export default SingleProduct;
