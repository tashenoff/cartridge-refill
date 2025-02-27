import React from 'react';
import ScrollArrow from './ScrollArrow';
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton


function HeroSection() {
    return (
        <div id="home" className="hero relative h-[600px] bg-base-200"
            style={{
                backgroundImage: "url(https://kz.resursplus.com/wp-content/uploads/2018/07/usl2-1.jpg)",
            }}>
            <div className="hero-overlay bg-black bg-opacity-80"></div>
            <div className="hero-content text-center">
                <div className="w-full">
                    <h1 className="text-5xl font-bold">Заправка картриджей</h1>
                    <p className="py-6">Быстрая и качественная заправка картриджей для принтеров любых моделей.</p>
                    <WhatsAppButton />
                </div>
            </div>
            <ScrollArrow className='bottom-16 absolute animate-bounce' direction="down" targetId="services" />
        </div>
    );
}

export default HeroSection;
