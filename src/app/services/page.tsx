import { Layout } from '@/components/Layout'

export default function Services() {
  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">事業内容・対応業務</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              多様なニーズに対応できるサービスを提供しています。
            </p>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              対応可能な業務内容
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">サンプル作成</h3>
                <p className="text-gray-600 leading-relaxed">
                  デザインのイメージを形にするサンプル作成を承っています。細部まで丁寧に仕上げます。
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">パターン制作</h3>
                <p className="text-gray-600 leading-relaxed">
                  精密なパターン制作により、美しいシルエットと着心地の良い製品を実現します。
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">小ロット量産</h3>
                <p className="text-gray-600 leading-relaxed">
                  30pcs〜の小ロット生産に対応。スタートアップや限定商品にも最適です。
                </p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">OEM生産</h3>
                <p className="text-gray-600 leading-relaxed">
                  お客様のブランド・仕様に合わせた製品を一貫生産いたします。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              製品づくりの流れ
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                {[
                  { step: 1, title: "お問い合わせ", description: "まずはお気軽にお問い合わせください" },
                  { step: 2, title: "ヒアリング・お見積り", description: "詳細なご要望をお聞かせください" },
                  { step: 3, title: "サンプル作成", description: "イメージを形にいたします" },
                  { step: 4, title: "ご承認・発注", description: "サンプル確認後、正式発注となります" },
                  { step: 5, title: "量産", description: "熟練の職人が丁寧に製作いたします" },
                  { step: 6, title: "検品・納品", description: "厳格な品質管理を経て納品いたします" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              業務範囲と制限
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
              <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-blue-900">最小ロット：</span>
                    <span className="text-gray-700">30pcs〜</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-blue-900">標準納期：</span>
                    <span className="text-gray-700">30〜45日</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                ※ご要望により応相談いたします。お気軽にお問い合わせください。
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}