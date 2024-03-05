import { Popover } from "@headlessui/react";
import React from "react";
import { useCartContext } from "../../context/CartContextProvider";

function CartPopup() {
    const { Cart, RemoveFromCart, UpdateToCart } = useCartContext();
    // console.log(Cart);
    const total = Cart.reduce((total, item) => total + item.quantity * item.prise, 0);

    const HandleSizeChange = (e, item) => {
        // UpdateToCart({})
    }

    // console.log(total);
    return (
        <>
            <Popover className={''}>
                <Popover.Button className="relative rounded-full hover:bg-amber-100 active:bg-amber-500 transition-colors p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    {Cart.length > 0 && (
                        <span className="text-[0.6rem] grid place-content-center bg-red-600 text-white rounded-full w-5 h-4 absolute top-0 -right-1">
                            {Cart.length > 3
                                ? "+3"
                                : Cart.length}
                        </span>
                    )}
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 bg-black opacity-20 z-10" />
                <Popover.Panel className="fixed h-lvh w-96 max-w-full right-0 bg-white divide-y z-50 top-0">
                    <div className="h-full flex flex-col divide-y">
                        {/* Header */}
                        <div className="px-5 py-4 flex">
                            <h1 className="font-semibold text-center flex-1 text-xl">
                                Cart
                                Items
                            </h1>
                            <Popover.Button
                                className={
                                    "absolute right-6 w-8 h-8 hover:bg-gray-100 active:bg-gray-200 rounded-md grid place-content-center"
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={
                                        1.5
                                    }
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </Popover.Button>
                        </div>
                        {/* Main cart */}
                        <div className="h-full overflow-y-auto -p-3">
                            <ul
                                role="list"
                                className=" flex flex-col gap-3"
                            >
                                {Cart.length <= 0 && <div className="p-5 border-b border-gray-100">0 item's in cart.</div>}
                                {Cart.map((item) => (
                                    <li className="flex p-3 bg-white" key={item.id}>
                                        <div className="aspect-[3/4] w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={
                                                    item.img
                                                }
                                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 py-2 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <div>
                                                        <a href="#">
                                                            {
                                                                item.title
                                                            }
                                                        </a>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                            {
                                                                item.categoryName
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="ml-4">
                                                        <button type="button" className="text-red-500 hover:bg-gray-200 p-1.5 rounded" onClick={() => RemoveFromCart(item)}>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="w-5 h-5"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mt-2 gap-5 text-xs items-center">
                                                <span className="text-sm font-medium text-gray-500">
                                                    Size
                                                </span>
                                                <div className="flex -overflow-hidden [&_label]:box-border [&_label]:border-2 [&_label]:cursor-pointer">
                                                    <div>
                                                        <input type="radio" name="size" id={`${item.id}_S`} value={`${item.id}_S`} checked={item.size === `${item.id}_S`} className="hidden peer" onChange={(e) => HandleSizeChange} />
                                                        <label htmlFor={`${item.id}_S`} className="w-8 h-8 grid place-content-center bg-gray-100 peer-checked:bg-amber-100 peer-checked:border-amber-200 rounded-s-lg">S</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" name="size" id={`${item.id}_L`} value={`${item.id}_L`} checked={item.size === `${item.id}_L`} className="hidden peer" onChange={(e) => HandleSizeChange} />
                                                        <label htmlFor={`${item.id}_L`} className="w-8 h-8 grid place-content-center bg-gray-100 peer-checked:bg-amber-100 peer-checked:border-amber-200">L</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" name="size" id={`${item.id}_XL`} value={`${item.id}_XL`} checked={item.size === `${item.id}_XL`} className="hidden peer" onChange={(e) => HandleSizeChange} />
                                                        <label htmlFor={`${item.id}_XL`} className="w-8 h-8 grid place-content-center bg-gray-100 peer-checked:bg-amber-100 peer-checked:border-amber-200 rounded-e-lg">XL</label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm mt-1">
                                                <div className="flex items-center gap-2">
                                                    <label
                                                        htmlFor="quantity"
                                                        className="text-sm font-medium text-gray-500"
                                                    >
                                                        Qty
                                                    </label>
                                                    <div className="flex divide-x-2 border-2 rounded-md">
                                                        <button className="w-8 grid place-content-center" onClick={() => UpdateToCart({ ...item, quantity: item.quantity - 1 })}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" className="p-1.5 w-12 outline-none text-center bg-gray-100 select-none" value={item.quantity} readOnly />
                                                        <button className="w-8 grid place-content-center" onClick={() => UpdateToCart({ ...item, quantity: item.quantity + 1 })}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-gray-500 flex items-end gap-2">
                                                    ₹{item.prise}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                        <div className="mt-4 m-3 mb-0 rounded-lg rounded-b-none border bg-white px-4 py-5 shadow-md">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">
                                    Subtotal
                                </p>
                                <p className="text-gray-700">
                                    ₹
                                    {
                                        total
                                    }
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">
                                    Shipping
                                </p>
                                <p className="text-gray-700">
                                    ₹50
                                </p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg">
                                    <span className="font-bold">
                                        Total
                                    </span>
                                    <span className="block text-sm text-gray-700">
                                        Including
                                        GST
                                    </span>
                                </p>
                                <div className="">
                                    <p className="mb-1 text-lg text-right font-bold">
                                        ₹
                                        {total
                                            ? total +
                                            50
                                            : 0}
                                    </p>
                                </div>
                            </div>
                            {/* <button className="mt-4 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"> */}
                            <button className="mt-4 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-orange-600 active:bg-orange-400">
                                Check
                                out
                            </button>
                        </div>
                    </div>
                </Popover.Panel>
            </Popover>
        </>
    );
}

export default CartPopup;
