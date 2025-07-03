import { Navigation } from './Navigation'
import { Footer } from './Footer'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-14 md:pt-20">
        {children}
      </div>
      
      {/* CTA Button */}
      <Link 
        href="/contact"
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-40"
      >
        お問い合わせ
      </Link>
      
      <Footer />
    </div>
  )
}