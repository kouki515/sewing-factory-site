import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 md:py-8 px-4 mt-8 md:mt-16">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-4">
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 text-sm list-none">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                私たちについて
              </Link>
            </li>
            <li>
              <Link href="/factory" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                工場紹介
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-sm text-gray-600 space-y-1">
          <p>株式会社峰田ソーイング</p>
          <p>法人番号: 9470001020256</p>
          <p>&copy; 2025 株式会社峰田ソーイング</p>
        </div>
      </div>
    </footer>
  )
}