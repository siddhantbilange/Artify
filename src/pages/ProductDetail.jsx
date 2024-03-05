import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { products } from "../utils/data.json";
import Breadcrumbs from '../components/shared/Breadcrumbs';


const useTruncatedElement = ({ ref }) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [isReadingMore, setIsReadingMore] = useState(false);

    useLayoutEffect(() => {
        const { offsetHeight, scrollHeight } = ref.current || {};

        if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
            setIsTruncated(true);
        } else {
            setIsTruncated(false);
        }
    }, [ref]);

    return {
        isTruncated,
        isReadingMore,
        setIsReadingMore,
    };
};









function ProductDetail() {

    const { id } = useParams();
    const ref = React.useRef(null);

    const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({
        ref,
    });
    const [item, setItem] = useState({
        "id": 0,
        "title": "Jujutsu Team",
        "description": "description...",
        "tags": "jujutsu, panda",
        "img": "img/anime/nxi_.__-20240205-0021.heic",
        "categoryId": 2,
        "categoryName": "Anime"
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
    // console.log(params);
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <section className="overflow-hidden bg-white py-11 -font-poppins ">
                    <Breadcrumbs />
                    <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4 md:w-1/2 ">
                                <div className="sticky top-0 z-50 overflow-hidden ">
                                    <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                        <img src={'/' + item?.img}
                                            className="object-cover w-full lg:h-full " />
                                    </div>
                                    <div className="flex-wrap hidden md:flex ">
                                        <div className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#"
                                                className="block border border-blue-300 hover:border-blue-300">
                                                {/* <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt="" */}
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
                                        <div className="w-1/2 p-2 sm:w-1/4">
                                            <a href="#"
                                                className="block border border-transparent hover:border-blue-300">
                                                <img src={'/' + item?.img} alt=""
                                                    className="object-cover w-full lg:h-20" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 ">
                                <div className="lg:pl-12">
                                    <div className="mb-8 ">
                                        <span className="text-lg font-medium text-rose-500">New</span>
                                        <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">{item.title}</h2>
                                        <div className="flex items-center mb-6">
                                            <ul className="flex mr-2">
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor"
                                                            className="w-4 mr-1 text-red-500"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor"
                                                            className="w-4 mr-1 text-red-500"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor"
                                                            className="w-4 mr-1 text-red-500"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor"
                                                            className="w-4 mr-1 text-red-500"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                            <p className="text-xs ">(2 customer reviews)</p>
                                        </div>
                                        <div className="max-w-md mb-8 text-gray-700">
                                            {item.description.split('\n').map((para, index) => <p className='mb-5' key={index}>{para}</p>)}
                                        </div>
                                        <p className="inline-block mb-8 text-4xl font-bold text-gray-700 ">
                                            <span>2000₹</span>{" "}
                                            <span
                                                className="text-base font-normal text-gray-500 line-through">2500.99₹</span>
                                        </p>
                                        <p className="text-green-600">7 in stock</p>
                                    </div>
                                    <form>
                                        <div className="flex items-center mb-8 gap-4">
                                            <div className='flex-[300px] flex'>
                                                <label htmlFor='size' className="w-16 text-xl font-bold">Size:</label>
                                                <select name='size' id='size' value={'L'} onChange={HandleSelectChange} className="p-2 w-32 ring rounded-md outline-none">
                                                    <option value={`${item.id}_SM`}>SM</option>
                                                    <option value={`${item.id}_M`}>M</option>
                                                    <option value={`${item.id}_L`}>L</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-32 mb-8 ">
                                            <label htmlFor=""
                                                className="w-full text-xl font-semibold text-gray-700">Quantity</label>
                                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                                <button
                                                    className="w-20 h-full text-gray-600 bg-gray-200 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input type="telxt"
                                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none text-md hover:text-black" readOnly placeholder="1" />
                                                <button
                                                    className="w-20 h-full text-gray-600 bg-gray-200 rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center -mx-4 ">
                                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                                <button
                                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100">
                                                    Add to Cart
                                                </button>
                                            </div>
                                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                                <button
                                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100">
                                                    Add to wishlist
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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