import 'swiper/css';
import 'swiper/css/pagination';
import { category } from "../utils/data.json";
import CategoryCard from './shared/CategoryCard';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';


function CategorySection() {

    const loopCategories = () => category.map((item, index) => <CategoryCard key={item.id} {...item} />)

    return (
        <div className='max-w-7xl mx-auto text-slate-800'>
            <div className='p-5'>
                <div className='mt-16 mb-5 flex justify-between'>
                    <h4 className='text-3xl font-medium'>Category</h4>
                    <button className='bg-slate-800 px-5 rounded-md text-white hover:bg-slate-700'>
                        See All
                    </button>
                </div>
                <div className='overflow-hidden w-full '>
                    <div className='h-96 flex mb-8 overflow-auto gap-8 snap-x snap-mandatory scrollbar-none'>
                        {loopCategories()}
                    </div>
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="h-96 flex mb-8 overflow-auto gap-8 snap-x snap-mandatory scrollbar-none"
                    >
                        {loopCategories()}
                    </Swiper> */}
                </div>
            </div>
        </div>
    )
}

export default CategorySection;
