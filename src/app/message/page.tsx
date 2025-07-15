import Image from 'next/image'
import { Layout } from '@/components/Layout'

export default function Message() {
  return (
    <Layout>
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">代表挨拶</h1>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 p-8 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 text-sm">代表者写真</span>
                    </div>
                    <h2 className="text-xl font-bold text-blue-900 mb-2">山田 太郎</h2>
                    <p className="text-blue-700 font-medium">代表取締役社長</p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      この度は、峰田ソーイングのウェブサイトにお越しいただき、誠にありがとうございます。
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      当社は2005年の創業以来、「お客様の想いを形にする」という理念のもと、高品質な縫製技術の向上と、お客様のニーズに応える柔軟な対応力の強化に取り組んでまいりました。
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      近年、ファッション業界を取り巻く環境は大きく変化しており、サステナビリティへの意識やデジタル化の波が押し寄せています。私たちは、このような変化を好機と捉え、従来の技術に加えて新しい技術や素材への対応も積極的に進めております。
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      何より大切にしているのは、お客様との信頼関係です。小ロット生産から大量生産まで、一つひとつの製品に込められたお客様の想いを理解し、それを形にすることが私たちの使命だと考えております。
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      今後も、お客様のパートナーとして、共に成長し続ける企業でありたいと思います。ご不明な点やご相談がございましたら、お気軽にお声がけください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              私たちの想い
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">品質への こだわり</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  20年以上培った技術と経験を活かし、妥協のない品質管理で確かな製品をお届けします。
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