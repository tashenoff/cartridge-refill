import React from 'react';

function ServiceSection() {
    const services = [
        {
            name: "Лазерные картриджи",
            image: "/images/s1.png" // Путь к изображению
        },
        {
            name: "Цветные лазерные картриджи",
            image: "/images/s1.png"
        },
        {
            name: "Тонер-картриджи",
            image: "/images/s1.png"
        },
    ];

    return (
        <div id="services" className="py-10 bg-base-200">
            <div className='container mx-auto'>
                <h2 className="text-3xl font-bold text-center mb-6">Наши услуги</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="card bg-base-100 shadow-md p-4">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="h-60 w-full object-cover mb-4 rounded-lg"
                            />
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                            <button className="btn btn-primary mt-4">Заказать</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;