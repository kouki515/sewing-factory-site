import { Layout } from '@/components/Layout'

export default function Testimonials() {
  const testimonials = [
    {
      company: "Aファッション株式会社",
      name: "佐藤様",
      comment: "細かい要望にも丁寧に対応していただき、高品質な製品を納期通りに作っていただきました。"
    },
    {
      company: "Bブランド株式会社",
      name: "田中様",
      comment: "小ロットでも快く引き受けていただき、スタートアップの私たちにとって非常に助かりました。"
    },
    {
      company: "Cアパレル株式会社",
      name: "鈴木様",
      comment: "技術力の高さに加え、コミュニケーションもスムーズで、信頼してお任せできるパートナーです。"
    },
    {
      company: "Dコーポレーション",
      name: "高橋様",
      comment: "品質の一貫性が素晴らしく、長期的なパートナーシップを築けています。"
    }
  ]

  const achievements = [
    {
      year: "2024",
      title: "大手アパレルブランドA社",
      description: "秋冬コレクション 500点を製作"
    },
    {
      year: "2024",
      title: "スタートアップB社",
      description: "ブランド立ち上げからサポート"
    },
    {
      year: "2023",
      title: "ユニフォームメーカーC社",
      description: "特殊素材を使用した作業服を製作"
    },
    {
      year: "2023",
      title: "ファッションD社",
      description: "欧州向け輸出用製品を製作"
    }
  ]

  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">お客様の声／実績紹介</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              これまでにお取引いただいたお客様からのお声と実績をご紹介いたします。
            </p>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              お客様の声
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="mb-4">
                    <div className="text-2xl text-blue-700 mb-2">“</div>
                    <p className="text-gray-700 leading-relaxed italic">
                      {testimonial.comment}
                    </p>
                    <div className="text-2xl text-blue-700 text-right">”</div>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-blue-900">{testimonial.company}</p>
                    <p className="text-gray-600 text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              最近の実績
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="mb-4 md:mb-0">
                      <span className="inline-block bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              続々とお取引いただいているお客様
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100">
              <div className="grid gap-4 md:gap-6 md:grid-cols-3 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">50+</div>
                  <div className="text-gray-700">取引先数</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">95%</div>
                  <div className="text-gray-700">リピート率</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">20年</div>
                  <div className="text-gray-700">平均取引期間</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}