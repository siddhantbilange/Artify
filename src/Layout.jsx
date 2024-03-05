import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Toaster />
        </>
    )
}

export default Layout