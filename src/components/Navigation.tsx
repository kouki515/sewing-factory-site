'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 h-14 md:h-16">
          <div className="logo font-bold text-lg">峰田ソーイング</div>
          
          {/* PC Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-blue-700 py-2 px-3 transition-colors duration-200"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-blue-700 py-2 px-3 transition-colors duration-200"
                >
                  私たちについて
                </Link>
              </li>
              <li>
                <Link 
                  href="/factory" 
                  className="hover:text-blue-700 py-2 px-3 transition-colors duration-200"
                >
                  工場紹介
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="hover:text-blue-700 py-2 px-3 transition-colors duration-200"
                >
                  製品ギャラリー
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="hover:text-blue-700 py-2 px-3 transition-colors duration-200"
                >
                  よくあるご質問
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-blue-700 py-2 px-3 transition-colors duration-200"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="hamburger w-6 h-5 relative cursor-pointer md:hidden"
            onClick={toggleMenu}
            aria-label="メニューを開く/閉じる"
          >
            <span className={`absolute h-0.5 w-full bg-gray-800 left-0 transition-all duration-300 ${isOpen ? 'top-2.5 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute h-0.5 w-full bg-gray-800 left-0 top-2.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-full bg-gray-800 left-0 transition-all duration-300 ${isOpen ? 'top-2.5 -rotate-45' : 'top-4.5'}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`fixed top-14 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="list-none">
          <li className="border-b border-gray-200">
            <Link 
              href="/" 
              className="block py-3.5 px-4 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}
            >
              ホーム
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/about" 
              className="block py-3.5 px-4 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}
            >
              私たちについて
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/factory" 
              className="block py-3.5 px-4 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}
            >
              工場紹介
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/gallery" 
              className="block py-3.5 px-4 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}
            >
              製品ギャラリー
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/faq" 
              className="block py-3.5 px-4 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}
            >
              よくあるご質問
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/contact" 
              className="block py-3.5 px-4 hover:bg-gray-100 transition-colors duration-200"
              onClick={closeMenu}
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}