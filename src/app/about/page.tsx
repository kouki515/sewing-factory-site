import { Layout } from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">会社概要</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                縫製工場株式会社は、創業20年以上の歴史を持つ縫製専門企業です。国内一貫生産体制により、高品質かつ柔軟なものづくりを提供しています。
              </p>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">設立：</span>
                    <span>2005年4月</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">所在地：</span>
                    <span>東京都台東区○○1-2-3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">代表取締役：</span>
                    <span>山田太郎</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">従業員数：</span>
                    <span>50名</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              沿革
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="relative pl-6 border-l-2 border-blue-700">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-700 rounded-full"></div>
                    <div className="text-blue-700 font-semibold">2005年</div>
                    <div className="text-gray-700">縫製工場株式会社 設立</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-700 rounded-full"></div>
                    <div className="text-blue-700 font-semibold">2010年</div>
                    <div className="text-gray-700">CADシステム導入</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-700 rounded-full"></div>
                    <div className="text-blue-700 font-semibold">2018年</div>
                    <div className="text-gray-700">新工場稼働開始</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-700 rounded-full"></div>
                    <div className="text-blue-700 font-semibold">2024年</div>
                    <div className="text-gray-700">サステナブル素材対応ライン立ち上げ</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              理念・ミッション
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">企業理念</h3>
                <p className="text-gray-700 leading-relaxed">
                  お客様の想いを形にする「ものづくり」を通じて、社会に貢献し、共に成長し続ける企業を目指します。
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">ミッション</h3>
                <p className="text-gray-700 leading-relaxed">
                  高品質な縫製技術と柔軟な対応力で、お客様のブランド価値向上に貢献します。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}