import React from 'react';

const PromoBanner = () => {
    return (
        <section className='section__container banner__container'>
            <div className='banner__card'>
                <span><i className="ri-truck-line"></i></span>
                <h4>Free Delivery</h4>
                <p>Free delivery within Dhaka College Campus! Get your orders delivered right to you without any extra charges. Fast, convenient, and completely free—shop now!</p>
            </div>
            <div className='banner__card'>
                <span><i className="ri-money-dollar-circle-line"></i></span>
                <h4>100% Money Back Guaranty</h4>
                <p>E-commerce have a review system, Where customers can share feedback.</p>
            </div>
            <div className='banner__card'>
                <span><i className="ri-user-voice-fill"></i></span>
                <h4>Strong Support</h4>
                <p>We offer a strong customer support.  Our team is always ready to help you with any questions or concerns you may have.</p>

            </div>
        </section>
    );
};

export default PromoBanner;