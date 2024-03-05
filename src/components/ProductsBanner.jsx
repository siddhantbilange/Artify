import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';


function ProductsBanner() {
    return (
        <div className='max-w-7xl mx-auto p-3 bg-white -h-64 min-h-64'>
            <div className='w-full h-full rounded-lg p-5 bg-amber-100 shadow-md flex flex-col items-center text-slate-700 text-center [&_p]:max-w-full [&_p]:w-96 overflow-hidden relative'>
                <h1 className='z-30 mt-5 text-3xl font-black max-w-full w-[400px]'>Explore, Customize & Elevate Your Space</h1>
                <p className='z-30 text-pretty mt-5 text-slate-500'>Elevate Your Space with Stunning Designs. Explore Our Library and Customize Your Perfect Piece Today!</p>
                <img src="img/gods/__we_wake_-20240206-0001.jpg" alt="" className='hidden md:inline-block absolute -left-12 lg:left-36 rotate-6 lg:top-20 w-40 p-3 bg-white border-8 border-t-slate-800 border-b-slate-900 border-l-slate-600 border-r-slate-600' />
                <img src="img/gods/__we_wake_-20240206-0002.jpg" alt="" className='hidden md:inline-block absolute right-4 lg:right-40 -rotate-12 bottom-20 w-40 p-3 bg-white border-8 border-t-slate-800 border-b-slate-900 border-l-slate-600 border-r-slate-600' />
            </div>
            {/* <Swiper
                className='h-full rounded-lg [&_.swiper-pagination]:text-right [&_.swiper-pagination]:pr-8 [&_.swiper-pagination]:text-sm [&_.swiper-pagination]:font-mono [&_.swiper-pagination]:font-semibold [&_.swiper-pagination]:text-slate-700'
                modules={[Pagination, A11y]}
                loop={true}
                autoplay={true}
                pagination={{ type: "fraction" }}

                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='bg-rose-100 rounded-lg'>Slide 1</SwiperSlide>
                <SwiperSlide className='bg-lime-100 rounded-lg'>Slide 2</SwiperSlide>
                <SwiperSlide className='bg-sky-100 rounded-lg'>Slide 3</SwiperSlide>
                <SwiperSlide className='bg-purple-100 rounded-lg'>Slide 4</SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default ProductsBanner