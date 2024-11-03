import React from 'react';
import dealsImg from "../../assets/deals.png";

const DealsSection = () => {
    return (
        <section className='section__container deals__container'>
            <div className='deals__image'>
                <img src={dealsImg} />
            </div>

            <div className='deals__content'>
                <h5>Get Up to 20% Discount</h5>
                <h4>Deals of the Month</h4>
                <p>Discover our exclusive Deals of the Month! Enjoy unbeatable discounts on our top-selling t-shirts, handpicked just for you. Don't miss out on these limited-time offers—grab your favorites before they're gone!</p>
            <div className='deals__countdown flex-wrap text-center'>
                <div className='deals__countdown__card'>
                    <h4>14</h4>
                    <p>Days</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>20</h4>
                    <p>Hours</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Mins</p>
                </div>
                <div className='deals__countdown__card'>
                    <h4>05</h4>
                    <p>Secs</p>
                </div>
            </div>
            </div>
        </section>
    );
};

export default DealsSection;