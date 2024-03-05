import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from './header/Searchbar';
import MobileMenu from './header/MobileMenu';
import { useCartContext } from '../context/CartContextProvider';
import CartPopup from './header/CartPopup';

function Header() {

    return (
        <header className='bg-amber-50' id='header'>
            <div className="contianer mx-auto max-w-7xl">
                <div className='flex justify-between py-2 px-5 text-slate-800'>
                    <Link to="/" className='font-light text-2xl text-slate-800 first-letter:font-medium hover:first-letter:text-orange-500'>
                        Aartify
                    </Link>
                    <nav className='gap-2 items-center font-light hidden md:flex'>
                        <Link to="/" className='hover:bg-amber-100 rounded-md hover:font-normal px-3 py-1.5'>Home</Link>
                        <Link to="products" className='hover:bg-amber-100 rounded-md hover:font-normal px-3 py-1.5'>Products</Link>
                        <Link to="/" className='hover:bg-amber-100 rounded-md hover:font-normal px-3 py-1.5'>Category</Link>
                        <Link to="/" className='hover:bg-amber-100 rounded-md hover:font-normal px-3 py-1.5'>AboutUS</Link>
                    </nav>
                    <div className='flex items-center gap-2'>
                        <Searchbar />
                        <CartPopup />
                        {/* <button className='relative rounded-full hover:bg-amber-100 active:bg-amber-500 transition-colors p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                            {
                                Cart.length > 0 &&
                                <span className='text-[0.6rem] grid place-content-center bg-red-600 text-white rounded-full w-5 h-4 absolute top-0 -right-1'>{Cart.length > 3 ? '+3' : Cart.length}</span>
                            }
                        </button> */}
                        <div className='md:hidden'>
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header