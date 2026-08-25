import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md'>
            <div className='flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6'>
                <div className='text-2xl sm:text-3xl font-semibold'>
                    <Link to='/' className='hover:text-blue-600 duration-300'> RK </Link>
                </div>

                <div className='hidden lg:flex gap-8'>
                    <Link to='/' className='hover:text-blue-600 duration-300'>Home</Link>
                    <Link to='/about' className='hover:text-blue-600 duration-300'>About</Link>
                    <Link to='/projects' className='hover:text-blue-600 duration-300'>Project</Link>
                    <Link to='/skills' className='hover:text-blue-600 duration-300'>My Skills</Link>
                    <Link to='/contact' className='hover:text-blue-600 duration-300'>Contact</Link>
                </div>

                <div className='hidden lg:flex gap-4'>
                    <a href='/Resume.pdf' target='_blank' rel='noreferrer' className='border rounded-lg px-5 py-2' > Resume </a>
                    <a href='/contact' className='border bg-blue-600 text-white rounded-lg px-5 py-2' > Hire me </a>
                </div>

                <div className='lg:hidden'>
                    <button className='cursor-pointer' onClick={() => setOpen(!open)} >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {open && (
                <div className='lg:hidden border-t px-4 sm:px-6 py-5 flex flex-col gap-5 bg-white/95 backdrop-blur-md'>
                    <Link to='/' onClick={() => setOpen(false)} className='hover:text-blue-600 duration-300'>Home</Link>
                    <Link to='/about' onClick={() => setOpen(false)} className='hover:text-blue-600 duration-300'>About</Link>
                    <Link to='/projects' onClick={() => setOpen(false)} className='hover:text-blue-600 duration-300'>Project</Link>
                    <Link to='/skills' onClick={() => setOpen(false)} className='hover:text-blue-600 duration-300'>My skills</Link>
                    <Link to='/contact' onClick={() => setOpen(false)} className='hover:text-blue-600 duration-300'>Contact</Link>

                    <div className='flex gap-3 pt-2'>
                        <a href='/Resume.pdf' target='_blank' rel='noreferrer' className='border rounded-lg px-5 py-2'> Resume </a>
                        <a href='/contact' onClick={() => setOpen(false)} className='border bg-blue-600 text-white rounded-lg px-5 py-2' > Hire me </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar