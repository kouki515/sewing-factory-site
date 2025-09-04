import { Layout } from '@/components/Layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "よくあるご質問 | 峰田ソーイング",
  description: "峰田ソーイングのよくあるご質問をまとめました。最小ロット数、納期、価格、品質管理など、縫製に関する疑問にお答えします。",
}

export default function FAQ() {
  const faqs = [
    {
      question: "最小ロット数はどのくらいですか？",
      answer: "何点でもお受けしています。少量生産でもお気軽にご相談ください。"
    },
    {
      question: "納期はどのくらいかかりますか？",
      answer: "標準的には30～45日いただいています。数量や仕様により異なりますので、詳しくはお問い合わせください。"
    },
    {
      question: "サンプル作成は可能ですか？",
      answer: "はい、サンプル作成も承っています。デザインや仕様を確認いただいてから量産に入ります。"
    },
    {
      question: "対応可能な素材はありますか？",
      answer: "綿、ポリエステル、ウール、リネンなど、幅広い素材に対応しています。特殊素材もご相談ください。"
    },
    {
      question: "料金の目安を教えてください。",
      answer: "製品の種類、数量、仕様により異なります。詳細なお見積りはお問い合わせいただければ、無料で作成いたします。"
    },
    {
      question: "パターンから作成してもらえますか？",
      answer: "別途料金を頂戴しますが、対応可能です。"
    },
    {
      question: "品質管理はどのように行っていますか？",
      answer: "各工程での品質チェックと、最終検品での厳格な品質管理を行っています。不良品は徹底して排除しています。"
    },
    {
      question: "急ぎの案件にも対応できますか？",
      answer: "可能な限り対応いたします。まずはお気軽にご相談ください。工場の状況を確認して回答いたします。"
    }
  ]

  return (
    <Layout>
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">よくあるご質問</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              お客様からよくいただくご質問をまとめました。こちらにない内容はお気軽にお問い合わせください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
              FAQ
              <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
            </h2>
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-4 flex items-start">
                      <span className="bg-blue-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </h3>
                    <div className="ml-9">
                      <div className="flex items-start">
                        <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          A
                        </span>
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 md:mt-16">
            <div className="bg-blue-50 p-6 md:p-8 rounded-xl border border-blue-100 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
                こちらにないご質問はお気軽に
              </h3>
              <p className="text-gray-700 mb-6">
                上記以外のご質問やご相談がございましたら、お気軽にお問い合わせください。
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                お問い合わせはこちら
              </a>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}
