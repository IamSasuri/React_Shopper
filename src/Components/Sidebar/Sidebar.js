import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const Sidebar = ({ children, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation()

    useEffect(() => {
        setIsOpen(false)
    },[location.pathname])

    return (
        <div className={className}>
            <button className={`relative py-[10px] px-[10px]`} onClick={() => { setIsOpen(true)}}>
                <span className={`block h-1 w-8 bg-gray-800`}></span>
                <span className={`block h-1 w-8 bg-gray-800 my-1`}></span>
                <span className={`block h-1 w-8 bg-gray-800`}></span>
            </button>
            {isOpen && (
                <div className="fixed inset-0 h-screen z-40 h-full bg-black bg-opacity-50 backdrop-blur" onClick={() => { setIsOpen(false); }} id="backdrop"></div>
            )}
            <aside id="sidebar" className={`fixed bg-white top-0 left-0  z-50 w-96 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-full flex justify-end'>
                    <button className="p-2 m-3 hover:text-gray-600 text-black font-bold text-4xl transition text-2xl duration-300" onClick={() => { setIsOpen(false)}}>x</button>
                </div>
                <div>
                    {children}
                </div>
            </aside>
        </div>
    );
};

export default Sidebar