import Image from 'next/image'
import { Layout } from '@/components/Layout'

export default function Gallery() {
  const galleryImages = [
    {
      src: "/images/LINE_ALBUM_20250620_250703_10.jpg",
      alt: "制服（ポロシャツ・スカート）",
      category: "制服"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_15.jpg",
      alt: "ビジネススーツ（ジャケット・スカート）",
      category: "ビジネスウェア"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_40.jpg",
      alt: "トレンチコート",
      category: "アウター"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_11.jpg",
      alt: "カジュアルジャケット",
      category: "カジュアルウェア"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_16.jpg",
      alt: "フォーマルドレス",
      category: "フォーマルウェア"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_17.jpg",
      alt: "ワンピース",
      category: "レディースウェア"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_26.jpg",
      alt: "ブラウス",
      category: "レディースウェア"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_27.jpg",
      alt: "カジュアルシャツ",
      category: "カジュアルウェア"
    },
    {
      src: "/images/LINE_ALBUM_20250620_250703_41.jpg",
      alt: "フォーマルスーツ",
      category: "ビジネスウェア"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-gray-900">{image.alt}</h3>
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