import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <section className='bg-white shadow-xl h-[80px] flex items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <div className='col-span-2'>
            <div className='logo'>
              <img className='w-[120px]' src='/img/logo.png' alt='' />
            </div>
          </div>
          <div className='col-span-7'>
            <nav className='flex justify-center'>
              <ul className='flex gap-[15px]'>
                <li className='px-[16px] py-[8px] bg-gray-700 rounded-md'>
                  <NavLink to='/' className='text-white'>
                    Home
                  </NavLink>
                </li>
                <li className='px-[16px] py-[8px] bg-gray-200 rounded-md'>
                  <NavLink to='/'>About</NavLink>
                </li>
                <li className='px-[16px] py-[8px] bg-gray-200 rounded-md'>
                  <NavLink to='/'>Product</NavLink>
                </li>
                <li className='px-[16px] py-[8px] bg-gray-200 rounded-md'>
                  <NavLink to='/'>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-span-3'>
            <div className='flex gap-[10px]'>
              <Link
                to='/login'
                className='px-[16px] py-[8px] bg-purple-700 text-white rounded-md'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='px-[16px] py-[8px] bg-[#2563eb] text-white rounded-md'
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
