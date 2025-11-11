import React from 'react'

const Header = () => {
  return (
    <>
    <header className='bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'>
        <div className='container mx-auto px-4 py-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                    <h1 className='text-2xl font-bold'>Tar Shop</h1>
                </div>
            <nav>
                <ul className='flex space-x-6'>
                    <li>
                        <a href='#' className='hover:text-sky-200 tracking-colors duration-200'>Home</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-sky-200 tracking-colors duration-200'>About</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-sky-200 tracking-colors duration-200'>Service</a>
                    </li>
                    <li>
                        <a href='#' className='hover:text-sky-200 tracking-colors duration-200'>Contact</a>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header