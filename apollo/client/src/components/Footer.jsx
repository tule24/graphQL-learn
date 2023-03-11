import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/space_cat_logo.png'

const Footer = () => {
    return (
        <footer className="px-10 py-8 bg-gray-900 text-white shadow-lg">
            <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <Link to='/' aria-label="Back to homepage" className="flex items-center p-2">
                        <img src={logo} />
                        <div className='ml-5 font-semibold text-pink-500'>
                            <p>Catstronaut</p>
                            <p>Kitty space academy</p>
                        </div>
                    </Link>
                </div>
                <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                    <li>
                        <a rel="noopener noreferrer" href="#">Instagram</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Facebook</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer