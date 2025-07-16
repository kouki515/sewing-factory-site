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
            className="hamburger w-8 h-8 relative cursor-pointer md:hidden flex flex-col justify-center items-center space-y-1"
            onClick={toggleMenu}
            aria-label="メニューを開く/閉じる"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 transform origin-center ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 transform ${isOpen ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 transform origin-center ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation */}
      <nav className={`fixed top-14 left-0 w-full bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="list-none m-0 p-0">
          <li className="border-b border-gray-200">
            <Link 
              href="/" 
              className="block py-4 px-6 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
              onClick={closeMenu}
            >
              ホーム
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/about" 
              className="block py-4 px-6 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
              onClick={closeMenu}
            >
              私たちについて
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/factory" 
              className="block py-4 px-6 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
              onClick={closeMenu}
            >
              工場紹介
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/gallery" 
              className="block py-4 px-6 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
              onClick={closeMenu}
            >
              製品ギャラリー
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/faq" 
              className="block py-4 px-6 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
              onClick={closeMenu}
            >
              よくあるご質問
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link 
              href="/contact" 
              className="block py-4 px-6 hover:bg-gray-100 transition-colors duration-200 text-gray-800"
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