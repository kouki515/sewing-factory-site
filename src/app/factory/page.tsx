import Image from 'next/image'
import { Layout } from '@/components/Layout'

export default function Factory() {
  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">工場紹介</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              最新の設備と熟練の技術で、高品質な製品をお届けします。
            </p>
            
            {/* Factory Images Grid */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 mb-12">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/sewing-factory-site/images/LINE_ALBUM_20250620_250703_20.jpg"
                  alt="縫製工場内の作業風景"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/sewing-factory-site/images/LINE_ALBUM_20250620_250703_35.jpg"
                  alt="工場内での縫製作業"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              設備・技術
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            
            {/* CAD Equipment Image */}
            <div className="mb-8">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/sewing-factory-site/images/LINE_ALBUM_20250620_250703_5.jpg"
                  alt="CADパターン作成システム"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">最新のCADシステムによる精密なパターン制作</p>
            </div>
            
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">CADシステム</h3>
                <p className="text-gray-600 leading-relaxed">
                  最新のCADシステムを活用し、精密なパターン制作を行っています。デジタル技術により、正確で効率的な型紙作成を実現。
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">工業用ミシン</h3>
                <p className="text-gray-600 leading-relaxed">
                  高性能な工業用ミシンを多数導入し、効率的な生産を実現しています。様々な素材や縫製技術に対応可能。
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">検品システム</h3>
                <p className="text-gray-600 leading-relaxed">
                  厳格な検品システムにより、品質の一貫性を保っています。各工程での品質管理を徹底。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              品質管理
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">品質管理体制</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>工程ごとの品質チェック</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>最終検品での厳格な品質管理</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>不良品の徹底した排除</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">技術力</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>熟練職人による手作業</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>多様な素材への対応</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>特殊縫製技術</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}