import React from 'react';
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton

function ServiceSection() {
    const services = [
        {
            name: "Лазерные картриджи",
            image: "/images/s1.jpg", // Путь к изображению
            description: "Профессиональная заправка и восстановление черно-белых лазерных картриджей для принтеров различных марок."
        },
        {
            name: "Цветные лазерные картриджи",
            image: "/images/s2.png",
            description: "Качественная заправка цветных лазерных картриджей с гарантией на все виды работ и расходных материалов."
        },
        {
            name: "Тонер-картриджи",
            image: "/images/3.jpg",
            description: "Заправка и восстановление тонер-картриджей для лазерных принтеров с использованием высококачественных тонеров."
        },
    ];

    return (
        <div id="services" className="bg-base-200 hero">
          
          
            <div className='py-10 '>
                <div className='container mx-auto'>
                    <h2 className="text-3xl font-bold text-center mb-6">Наши услуги</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="card bg-opacity-70 backdrop-blur-md bg-base-200 border-base-100 border shadow-md p-4">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-60 w-full object-cover mb-4 rounded-lg"
                                />
                                <h3 className="text-xl font-semibold">{service.name}</h3>
                                <p className="mt-2">{service.description}</p> {/* Описание услуги */}
                                <WhatsAppButton />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ServiceSection;
