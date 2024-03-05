import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';

function CategoryCard({ banner, title, id }) {
    return (
        <div className='h-full aspect-[4/5] flex-shrink-0 overflow-hidden rounded-md relative group snap-start cursor-pointer'>
            <img src={banner} alt={title} className='w-full h-full object-cover z-10' loading="lazy" />
            <div className='absolute w-full h-full top-0 left-0 z-20 shadow-[inset_0px_0px_100px_0px_#111] group-hover:shadow-none grid place-content-center group-hover:opacity-0'>
                <span className='text-pretty text-white text-4xl font-sans '>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default CategoryCard