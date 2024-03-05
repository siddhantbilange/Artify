import React from 'react'
import Breadcrumbs from '../components/shared/Breadcrumbs'
import ProductsBanner from '../components/ProductsBanner'
import { products } from "../utils/data.json";
import ProductCard from '../components/shared/ProductCard';


function Products() {
    const loopProducts = () => products.map((item) => <ProductCard key={item.id} item={item} />);

    return (
        <>
            <ProductsBanner />
            <Breadcrumbs />
            <div className='max-w-7xl mx-auto'>
                <div className='p-5'>
                    <div className='mt-12 flex justify-between'>
                        <h4 className='text-3xl font-medium'>Products</h4>
                        <div>
                            {/* Filters */}
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {loopProducts()}
                </div>
            </div>
        </>
    )
}

export default Products