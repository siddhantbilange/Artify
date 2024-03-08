import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContextProvider';

function ProductCard({ item }) {
    const [active, setActive] = useState(false);
    const { AddToCart } = useCartContext();
    const { id, title, img,price, categoryName } = item;



    const HandleButton = () => {
        console.log("item-> ", item);
        toast.success("Item Added into cart !!");
        AddToCart({ ...item, 'size': `${id}_${'L'}`, quantity: 1 })
    }




    return (<div key={id} className='w-full p-5 sm:w-1/2 md:w-1/3 lg:w-1/5'>
        <Link to={`/products/${id}`} className='relative'>
            <span className='absolute top-0 left-0 w-full h-full'></span>
            <img src={img} alt={title} className='w-full aspect-[3/4] object-cover rounded-md transition-all hover:scale-105 bg-amber-200' loading="lazy" />
        </Link>
        <div className='relative'>
            <h2 className='font-semibold text-lg text-slate-700 mt-1 text-center text-pretty'>{title}</h2>
            <small className='text-center block text-slate-500 -translate-y-1.5'>{categoryName}</small>
            <p className='text-center font-semibold'>
                <span className='text-rose-600'>
                ₹{price}
                </span>
            </p>
            {/* Cart button************ */}
            <button type='button' className='absolute -top-8 right-2 w-11 h-11 text-white rounded-full shadow-[0px_10px_10px_#aaa] bg-orange-500 grid place-content-center active:scale-95 transition-all' onClick={(e) => HandleButton()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth={2} ><path fill="currentColor" d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75M9 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></path></svg>
            </button>
        </div>
    </div>
    )
}

export default ProductCard