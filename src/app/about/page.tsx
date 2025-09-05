import Image from 'next/image'
import { Layout } from '@/components/Layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "会社概要 | 峰田ソーイング",
  description: "峰田ソーイングの会社概要をご紹介。2005年創業、香川県さぬき市に本社を構える縫製専門企業です。代表挨拶、企業理念、品質へのこだわりをご覧ください。",
}

export default function About() {
  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">会社概要</h1>

            {/* Company Building Image */}
            <div className="mb-8">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/images/LINE_ALBUM_20250620_250703_1.jpg"
                  alt="峰田ソーイング工場外観"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">峰田ソーイング本社工場</p>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                峰田ソーイングは、創業20年以上の歴史を持つ縫製専門企業です。国内一貫生産体制により、高品質かつ柔軟なものづくりを提供しています。
              </p>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">設立：</span>
                    <span>2024年6月</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">所在地：</span>
                    <span>香川県さぬき市志度１９９６番地</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">代表取締役：</span>
                    <span>張金燕</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">従業員数：</span>
                    <span>10名</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-900 min-w-[80px] md:min-w-[100px]">電話番号：</span>
                    <span>087-899-8909</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>


          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              代表挨拶
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3 p-8 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/images/representative_photo.jpg"
                        alt="代表取締役社長 張金燕"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">張 金燕</h3>
                    <p className="text-blue-700 font-medium">代表取締役社長</p>
                  </div>
                </div>

                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      株式会社峰田ソーイングは、2006年に設立した「南通峰田服装有限公司」を起点に、布帛を中心とした多様なアパレル製品の企画・生産・貿易を手掛けてまいりました。以来、「南通富燕服装有限公司」（2009年設立）、「漢中碧洲服装有限公司」（2019年設立）と事業を広げ、2024年6月には日本法人として株式会社峰田ソーイングを設立し、生産から貿易まで一貫して対応できる体制を整えております。
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      当社はスーツ、ジャケット、コート、シャツ、防寒着をはじめ、警備服、食品白衣、防塵服、看護服、病院服など、幅広いアイテムの製造に豊富な実績を有し、月産約4万〜5万枚の生産能力を誇ります。大口のご注文だけでなく、小ロットや特寸、刺繍やプリントなどの特殊加工にも柔軟に対応いたします。
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      また、企画室には最新のCADシステム（日昇・YUKA）を導入し、マスターパターンの作成からグレーディング、縫製仕様書の作成までスピーディーに対応可能です。サンプル作成においても、ファストサンプルから先上げ、本番抜き取りまで段階的に確認を行い、品質の確保に努めております。
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      一般貿易においては、お客様からいただいた生地見本に基づき試作を行い、試験反はカケンにて検査を実施。さらに、防水・吸汗速乾・防臭・制菌など、各種機能加工のご要望にも対応しております。
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      私たちは「信用第一」をモットーに、「報連相」を大切にした経営理念のもと、品質と納期を徹底的に守り抜き、お客様の信頼に応えるものづくりを続けてまいります。今後とも一層のご支援を賜りますようお願い申し上げます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">品質への こだわり</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  約20年間で培った技術と経験を活かし、妥協のない品質管理で確かな製品をお届けします。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">お客様との 信頼関係</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  お客様のニーズを深く理解し、長期的なパートナーシップを築いてまいります。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">革新と 成長</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  常に新しい技術や手法を取り入れ、時代とともに進化し続ける企業でありたいと考えています。
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  )
}
