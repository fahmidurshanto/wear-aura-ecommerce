import React from 'react';
import card1 from "../../assets/jersey/jersey.jpg";
import card2 from "../../assets/jersey/jersey6.jpg";
import card3 from "../../assets/jersey/jersey4.jpg";

const HeroSection = () => {

    const cards = [
        {
            id: 1,
            trend: "2024 Trend",
            image: card1,
            title: "Jersey"
        },
        {
            id: 2,
            trend: "2024 Trend",
            image: card2,
            title: "Jersey"
        },
        {
            id: 3,
            trend: "2024 Trend",
            image: card3,
            title: "Jersey"
        },
    ]

    return (
        <section className='section__container hero__container'>
            {
                cards.map((card) => (
                    <div key={card.id} className="hero__card">
                        <img className='w-full h-64' src={card.image} alt={card.title} />
                        <div className='hero__content p-5'>
                            <p>{card.trend}</p>
                            <h4>{card.title}</h4>
                            <a  href='#'>Discover More</a>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default HeroSection;