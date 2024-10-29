import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'; // Импортируем нужную иконку

function ContactForm() {
    return (
        <div id="footer" className="hero bg-base-100 h-[380px]"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay bg-black bg-opacity-80"></div>
            <div className='container mx-auto'>
                <div className='py-10 flex items-center justify-center flex-col '>
                    <div className="flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faCommentDots} className="text-white text-3xl" /> {/* Иконка над заголовком */}
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-6">Оставить заявку</h2>
                    <h3 className="text-xl text-center text-white mb-4">Мы свяжемся с вами в ближайшее время</h3>
                    <button type="submit" className="btn btn-primary ">Написать в WhatsApp</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;