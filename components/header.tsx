import type { NextPage } from 'next';
import { useState } from 'react';
import classNames from 'classnames';

const Header:NextPage = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return  (

    <nav className= "fixed w-full z-10 pin-t bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-4">

          {/* 메뉴 */}
          <div>
            <a href='/' className="flex items-center py-5 px-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span className="font-bold">Home</span>
            </a>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
            <a href='/myrefrigerator' className="py-5 px-3 text-gray-700 hover:text-gray-900">
            나의 냉장고
            </a>
            </div>


          {/* 메뉴2 */}
          <div className = 'hidden md:flex items-center space-x-1'>
            <a href='/login' className="py-2 px-3 bg-red-200 hover:bg-red-100 text-red-900 hover:text-red-800 rounded transition duration-300">
            로그인
            </a>
        </div>

        {/* mobile menu */}
        <div className="md:hidden flex items-center">
            {/* 메뉴 토글 아닐 때 : 햄버거 메뉴, 토글일 때 : x모양 아이콘 나오도록 */}
            <button onClick={() => setMenuToggle(!menuToggle)}>
            {menuToggle ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>) : 
              (<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>)}
            </button>
          </div>

      </div>
      </div>
         {/* mobile menu items */}
      <div className={classNames("md:hidden", { hidden: !menuToggle })}>
        <a href="/myrefrigerator" className="block py-2 px-4 text-sm hover:bg-gray-200">
         나의 냉장고
        </a>
        <a href="/login" className="block py-2 px-4 text-sm hover:bg-gray-200">
          로그인
        </a>
      </div>
    </nav>  

)
}

export default Header;

