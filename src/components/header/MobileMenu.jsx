import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function MobileMenu() {
    return (
        <Menu as="div" className="inline-block">
            <Menu.Button className="rounded-full hover:bg-amber-100 active:bg-amber-500 transition-colors p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                {/* <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"> */}
                <Menu.Items className="absolute w-full max-w-xs top-14 right-0 z-20 left-0 outline-none bg-white ml-auto rounded ring-1 ring-amber-200 shadow-lg p-3">
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                className={`${active ? 'bg-amber-100 ' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                Home
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                to={'/products'}
                                className={`${active ? 'bg-amber-100 ' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                Products
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                className={`${active ? 'bg-amber-100 ' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                Category
                            </Link>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                className={`${active ? 'bg-amber-100 ' : ''
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                                AboutUS
                            </Link>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu >

    )
}

export default MobileMenu