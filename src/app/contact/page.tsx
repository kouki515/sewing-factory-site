import { Layout } from '@/components/Layout'

export default function Contact() {
  return (
    <Layout>
      <main>
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          <section className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">お問い合わせ</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              ご不明な点やご相談がございましたら、お気軽にお問い合わせください。
            </p>
          </section>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
                お問い合わせフォーム
                <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社・団体名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ種別 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="estimate">お見積り依頼</option>
                      <option value="consultation">ご相談</option>
                      <option value="sample">サンプル依頼</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                      placeholder="具体的なお問い合わせ内容をご記入ください。"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
                会社情報
                <div className="absolute bottom-[-8px] left-0 w-10 h-1 bg-blue-700 rounded-full" />
              </h2>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">会社名</h3>
                    <p className="text-gray-700">縫製工場株式会社</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">住所</h3>
                    <p className="text-gray-700">〒123-4567<br />東京都台東区○○1-2-3</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">電話番号</h3>
                    <p className="text-gray-700">03-1234-5678</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">メールアドレス</h3>
                    <p className="text-gray-700">info@example.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">営業時間</h3>
                    <p className="text-gray-700">平日 9:00 - 18:00<br />(土日祖日・祥日を除く)</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
}