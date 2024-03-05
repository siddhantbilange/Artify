import React from 'react';
import { products } from "../utils/data.json";
import ProductCard from './shared/ProductCard';
import { Link } from 'react-router-dom';



function ProductSection() {
    const loopProducts = () => products.slice(0, 15).map((item) => <ProductCard key={item.id} item={item} />);
    return (
        <div className='w-full bg-amber-50'>
            <div className='max-w-7xl mx-auto text-slate-800 pb-8'>
                <div className='p-5'>
                    <div className='mt-12 flex justify-between'>
                        <h4 className='text-3xl font-medium'>Products</h4>
                        <Link to="products" className='leading-10 bg-slate-800 px-5 rounded-md text-white hover:bg-slate-700'>
                            See All
                        </Link>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex flex-wrap'>
                        {loopProducts()}
                    </div>
                    <div className='flex justify-center mt-8'>
                        <Link to="products" className='bg-slate-800 px-16 py-2 rounded-md text-white hover:bg-slate-700 '>
                            See All
                        </Link>
                    </div>
                    {/* 
                        <div className='grid grid-cols-12 gap-8 p-5'>
                            {
                                new Array(3).fill(0).map((_) =><div className='py-96 p-5 bg-amber-200 col-span-full sm:col-span-6 md:col-span-4'></div>)
                            }
                        </div>
                    */}
                </div>
            </div>
        </div>
    )
}

export default ProductSection