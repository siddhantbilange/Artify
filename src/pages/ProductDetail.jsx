import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { products } from "../utils/data.json";
import Breadcrumbs from '../components/shared/Breadcrumbs';
import Products from './Products';
import { useCartContext } from '../context/CartContextProvider';



// const useTruncatedElement = ({ ref }) => {
//     const [isTruncated, setIsTruncated] = useState(false);
//     const [isReadingMore, setIsReadingMore] = useState(false);

//     useLayoutEffect(() => {
//         const { offsetHeight, scrollHeight } = ref.current || {};

//         if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
//             setIsTruncated(true);
//         } else {
//             setIsTruncated(false);
//         }
//     }, [ref]);

//     return {
//         isTruncated,
//         isReadingMore,`
//         setIsReadingMore,
//     };
// };









const ProductDetail= () => {

    const { id } = useParams();
    // const ref = React.useRef(null);

    // const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({
    //     ref,
    // });
    const [item, setItem] = useState({
        "id": 0,
        "title": "",
        "description": "",
        "tags": "",
        "img": "",
        "categoryId": 0,
        "categoryName": "",
        "price":0
    },)

    useEffect(() => {
        if (id) {
            const data = products.find((item) => item.id == id);
            
            setItem({ ...data, 'size': `${id}_${'L'}` })
        }
    }, [])

    const HandleSelectChange = (e) => {
        // console.log(e);
        setItem({ ...item, 'size': e.target.value })
    }


    const [quantity, setQuantity] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const changeImage = (index) => setCurrentIndex(index);

    // const handleQuantityChange = (e) => {
    //     const newQuantity = parseInt(e.target.value, 10);
    //     setQuantity(isNaN(newQuantity) ? 0 : newQuantity);
    // };

    // console.log(params);
    // const [active, setActive] = useState(false);
    const { AddToCart } = useCartContext();
    // const { id, title, img,price, categoryName } = item;
    
         const HandleButton = () => {
        console.log("item-> ", item);
        toast.success("Item Added into cart !!");
        AddToCart({ ...item, 'size': `${id}_${'L'}`, quantity: 1 })
    }

    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <section className="overflow-hidden bg-white py-11 -font-poppins ">
                    <Breadcrumbs />
                    <div className="max-w-7xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4 md:w-1/2 ">
                                {/* <div className="sticky top-0 z-50 overflow-hidden ">
                                    <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                        <img src={'/' + item?.img}
                                            className="object-cover w-full lg:h-full " />
                                    </div>
                                    <div className="flex-wrap hidden md:flex ">
                                        <div className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#"
                                                className="block border border-blue-300 hover:border-blue-300">
                                                <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" className="object-cover w-full lg:h-20" alt="" />
                                            </a>
                                        </div>
                                        <div className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#"
                                                className="block border border-transparent hover:border-blue-300">
                                                <img src={'/' + item?.img} alt=""
                                                    className="object-cover w-full lg:h-20" />
                                            </a>
                                        </div>
                                        <div className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#"
                                                className="block border border-transparent hover:border-blue-300">
                                                <img src={'/' + item?.img} alt=""
                                                    className="object-cover w-full lg:h-20" />
                                            </a>
                                        </div>
                                        <div className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#"
                                                className="block border border-transparent hover:border-blue-300">
                                                <img src={'/' + item?.img} alt=""
                                                    className="object-cover w-full lg:h-20" />
                                            </a>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className=" mx-auto flex  md:flex-row-reverse h-[500px]">
                                    <div className="w-full aspect-square- ">
                                        <img
                                            src={`/${products[currentIndex].img}`}
                                            alt="Product" className=" w-full h-full object-contain" />
                                    </div>
                                    <div className="w-56 overflow-hidden">
                                        <div className="flex flex-col items-start gap-4 h-full">
                                        <img
                                            src={`/${products[currentIndex].img}`}
                                            alt="Product" className=" w-full -aspect-[3/4] object-contain" />
                                        <button className='w-full aspect-[3/4] bg-gray-300'>
                                            0o0
                                        </button>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="img_container flex flex-col-reverse lg:flex-row gap-3">
                                    
                                    <div className="left w-[50%] lg:w-[30%]  overflow-hidden">
                                        <div className="w-full flex flex-row lg:flex-col gap-2">
                                            <div className=" w-full md:aspect-[3/4] ">
                                        <img
                                            src={`/${item.img}`}
                                            alt="Product" className=" object-cover h-full" />
                                            </div>

                                            <div className="w-full md:aspect-[3/4]">
                                        <button className='h-full w-full aspect-[3/4] bg-gray-400 text-gray-900 text-xl font-bold'>
                                            0o0
                                        </button>

                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div className="right w-full self-start">
                                        <img
                                            src={`/${item.img}`}
                                            alt="Product" className=" w-full h-full object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 ">
                                <div className="flex-1 text-slate-700">
                                    <h1 className=" text-2xl lg:text-3xl font-bold">{item.title}</h1>
                                    <span className="text-2xl lg:text-3xl font-semibold text-rose-500 leading-[2em] flex gap-3 items-center">
                                        <span>₹{item.price}</span>
                                        <span className="text-gray-400 line-through text-xl">&nbsp;₹{item.price}&nbsp;</span>
                                        <span className=' lg:block hidden text-sm p-1 ml-5 bg-[#007600] text-white px-2'>In Stock</span>
                                        <span className='hidden text-base ml-5 bg-red-400 text-white rounded-md px-2'>Out of Stock</span>
                                    </span>
                                    <span className=' block lg:hidden text-base w-20 text-center my-3  bg-[#007600] text-white rounded-md px-2'>In Stock</span>
                                    <h2 className='mt-6'>{item.description}</h2>
                                    <div className="middle flex">
                                        <form className="mt-8 flex gap-5">
                                            <div className="relative flex items-center max-w-[8rem] border">
                                                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="hover:bg-gray-200 p-3 h-9 focus:outline-none">
                                                    <svg className="w-2 h-2 text-gray-900 -dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="text"
                                                    id="quantity-input"
                                                    data-input-counter
                                                    data-input-counter-min="1"
                                                    data-input-counter-max="50"
                                                    aria-describedby="helper-text-explanation"
                                                    className="border-x-0 border-gray-300 h-9 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-1 -dark:bg-gray-700 -dark:border-gray-600 -dark:placeholder-gray-400 -dark:text-white -dark:focus:ring-blue-500 -dark:focus:border-blue-500"
                                                    placeholder="1"
                                                    // value={quantity}
                                                    // onChange={handleQuantityChange}
                                                    required
                                                />

                                                <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="hover:bg-gray-200  p-3 h-9 focus:outline-none">
                                                    <svg className="w-2 h-2 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button>


                                            </div>

                                            <button  onClick={(e) => HandleButton()} className='bg-rose-500 hover:bg-opacity-90 active:bg-rose-800 active:bg-opacity-100 text-white px-10 py-1'>Add to cart</button>
              </form>

                                    </div>
                                    <div className="hidden mt-5 text-lg -font-semibold">
                                        <span>Categories:</span>
                                        <span className='font-semibold'>accessory</span>
                                    </div>
                                    <div className="mt-8">
                                        <span className="mt-8 mb-2 text-lg font-semibold text-level_4">Tags:</span>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {
                                                item.tags.split(",").map((tags) => (
                                                        <span className='px-3 py-2 lowercase pb-1.5 text-gray-200 bg-gray-600 text-xs font-semibold'>{tags}</span>
                                            
                                            ))}
                                        </div>
                                    </div>
                                    <div className="detail list-none mt-5">
                                        <hr className='border-1 border-gray-400' />
                                        <h2 className='mt-5 mb-2 text-lg font-semibold text-level_4'>Product Details</h2>
                                        {[...Array(5)].map((_) => (
                                            <li className='text-sm leading-7 font-semibold text-slate-500'>
                                                <span className='text-slate-700 font-bold mr-8'>Lorem, ipsum.</span>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProductDetail