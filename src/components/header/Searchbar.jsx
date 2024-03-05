import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'

function Searchbar() {
    const SearchInput = () => {
        return <div className="-relative absolute w-56 top-0 right-0 -translate-y-1 lg:-translate-y-1/2 rounded-md shadow-sm ">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <input type="text" name="price" id="price" className="block w-full rounded-md border-0 p-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 outline-none" placeholder="Search.." autoFocus />
        </div>
    }
    return (
        <div className='relative'>
            <div className='hidden lg:block relative'>
                <SearchInput />
            </div>
            <Popover className="lg:hidden grid place-content-center">
                <Popover.Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition duration-100 ease-in"
                    enterFrom="transform -top-12 opacity-0"
                    enterTo="transform top-0 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform top-0 opacity-100"
                    leaveTo="transform -top-12 opacity-0"
                >
                    <Popover.Panel className="absolute z-10 w-full left-0 top-0 py-2">
                        <div className='container max-w-7xl mx-auto'>
                            <div className='w-full max-w-xs mx-auto md:mx-px md:ml-auto md:mr-16'>
                                <SearchInput />
                            </div>
                        </div>
                        <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

export default Searchbar