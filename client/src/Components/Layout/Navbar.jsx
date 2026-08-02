import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md'>
            <div className='flex justify-between items-center max-w-7xl mx-auto px-6 py-6' >
                <div className='text-3xl font-semibold '>
                    <Link to="/" className='hover:text-blue-600 duration-300'>RK</Link>
                </div>
                <div className='hidden lg:flex gap-8'>
                    <Link to="/" className='hover:text-blue-600 duration-300'>Home</Link>
                    <Link to="/about" className='hover:text-blue-600 duration-300'>About</Link>
                    <Link to="/projects" className='hover:text-blue-600 duration-300'>Project</Link>
                    <Link to="/skills" className='hover:text-blue-600 duration-300'>Skills</Link>
                    <Link to="/contact" className='hover:text-blue-600 duration-300'>Contact</Link>

                </div>
                <div className='hidden lg:flex gap-4'>
                    <button className='border rounded-lg px-5 py-2'>Resume</button>
                    <button className='border bg-blue-600 text-white rounded-lg px-5 py-2'> Hire me</button>
                </div>
                <div className='lg:hidden '>
                    <button className=" cursor-pointer" onClick={() => setOpen(!open)} >
                        {open ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>
            {
                open && (
                    <div className='lg:hidden flex flex-col gap-4 p-6'>
                        <Link to="/" className='hover:text-blue-600 duration-300' onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/about" className='hover:text-blue-600 duration-300' onClick={() => setOpen(false)} >About</Link>
                        <Link to="/projects" className='hover:text-blue-600 duration-300' onClick={() => setOpen(false)} >Project</Link>
                        <Link to="/skills" className='hover:text-blue-600 duration-300' onClick={() => setOpen(false)} >Skills</Link>
                        <Link to="/contact" className='hover:text-blue-600 duration-300' onClick={() => setOpen(false)} >Contact</Link>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar
