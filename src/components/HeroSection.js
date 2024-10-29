import React from 'react';

function HeroSection() {
    return (
        <div id="home" className="hero h-[600px] bg-base-200"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-black bg-opacity-80"></div>
            <div className="hero-content text-center">
                <div className="w-full">
                    <h1 className="text-5xl font-bold">Заправка картриджей</h1>
                    <p className="py-6">Быстрая и качественная заправка картриджей для принтеров любых моделей.</p>
                    <button className="btn btn-primary">написать специалисту</button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
