import Image from 'next/image'
import { Layout } from '@/components/Layout'

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
      alt: "ドレス作品"
    },
    {
      src: "https://images.unsplash.com/photo-1516762689617-e1cfddf819d1?auto=format&fit=crop&w=400&q=80",
      alt: "シャツ作品"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80",
      alt: "ジャケット作品"
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80",
      alt: "カジュアルウェア"
    },
    {
      src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80",
      alt: "ビジネスウェア"
    },
    {
      src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80",
      alt: "アクセサリー"
    },
    {
      src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
      alt: "スポーツウェア"
    },
    {
      src: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=400&q=80",
      alt: "コート作品"
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
      alt: "フォーマルウェア"
    }
  ]

  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">製品ギャラリー</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              これまでに手がけた様々な製品をご紹介いたします。
            </p>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              作品一覧
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <p className="text-sm md:text-base font-medium text-gray-700">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              製作実績
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">レディースウェア</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>・ ワンピース</li>
                  <li>・ ブラウス</li>
                  <li>・ スカート</li>
                  <li>・ パンツ</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">メンズウェア</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>・ シャツ</li>
                  <li>・ ジャケット</li>
                  <li>・ パンツ</li>
                  <li>・ コート</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">特殊製品</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>・ ユニフォーム</li>
                  <li>・ スポーツウェア</li>
                  <li>・ アウター</li>
                  <li>・ バッグ</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}