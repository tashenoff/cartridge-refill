// src/components/Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    return (
        <div className="navbar bg-base-100">
            <div className="container mx-auto"> {/* Добавляем контейнер */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#advantages">Преимущества</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost text-xl">
                    <img src="/images/logo.svg" alt="Логотип" className="lg:h-8 h-5 w-auto" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#advantages">Преимущества</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center justify-end'>
                        <FontAwesomeIcon className='mr-2' icon={faPhone} />
                        <a href="tel:87009619663" className="link">8(700)961-96-63</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
