import Image from 'next/image'
import { Layout } from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src="/sewing-factory-site/images/LINE_ALBUM_20250620_250703_1.jpg"
            alt="峰田ソーイング工場外観"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                峰田ソーイング
              </h1>
              <p className="text-white text-lg md:text-xl lg:text-2xl font-medium drop-shadow-lg">
                高品質な縫製で<br />あなたのブランドをサポート
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-8 md:py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-12 relative">
            私たちの強み
            <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
          </h2>
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">高品質な縫製</h3>
              <p className="text-gray-600 leading-relaxed">熟練の職人が一つひとつ丁寧に仕上げます。</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">小ロット対応</h3>
              <p className="text-gray-600 leading-relaxed">少量生産でもお気軽にご相談ください。</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">国内一貫生産</h3>
              <p className="text-gray-600 leading-relaxed">国内での一貫生産体制により短納期を実現。</p>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-8 md:py-16 px-4 max-w-6xl mx-auto bg-gray-50/50">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-12 relative">
            最新情報
            <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
          </h2>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start space-x-3 md:space-x-4 text-gray-700">
              <span className="text-sm md:text-base font-medium text-blue-700 whitespace-nowrap">2025/06/15</span>
              <span className="text-sm md:text-base">新設備導入のお知らせ</span>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 text-gray-700">
              <span className="text-sm md:text-base font-medium text-blue-700 whitespace-nowrap">2025/05/28</span>
              <span className="text-sm md:text-base">サステナブル素材への取り組み</span>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4 text-gray-700">
              <span className="text-sm md:text-base font-medium text-blue-700 whitespace-nowrap">2025/04/10</span>
              <span className="text-sm md:text-base">公式Instagramを開設しました</span>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
