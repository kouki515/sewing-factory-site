'use client'

import { Layout } from '@/components/Layout'

export default function Contact() {
  const sanitizeInput = (input: string | null): string => {
    if (!input) return ''
    return input.replace(/[<>\"'&]/g, '').trim()
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const formData = new FormData(e.currentTarget)
      
      // 入力値の取得とサニタイゼーション
      const company = sanitizeInput(formData.get('company') as string)
      const name = sanitizeInput(formData.get('name') as string)
      const email = sanitizeInput(formData.get('email') as string)
      const phone = sanitizeInput(formData.get('phone') as string)
      const subject = sanitizeInput(formData.get('subject') as string)
      const message = sanitizeInput(formData.get('message') as string)
      
      // 必須項目の検証
      if (!name) {
        alert('お名前を入力してください。')
        return
      }
      
      if (!email) {
        alert('メールアドレスを入力してください。')
        return
      }
      
      if (!validateEmail(email)) {
        alert('正しいメールアドレスを入力してください。')
        return
      }
      
      if (!subject) {
        alert('お問い合わせ種別を選択してください。')
        return
      }
      
      if (!message) {
        alert('お問い合わせ内容を入力してください。')
        return
      }
      
      // メール件名・本文の作成
      const mailSubject = `【峰田ソーイング】${subject}のお問い合わせ`
      const mailBody = `
会社・団体名: ${company}
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone}
お問い合わせ種別: ${subject}

お問い合わせ内容:
${message}
      `.trim()
      
      // mailto リンクの生成と実行
      const mailtoLink = `mailto:kusumikouki0515@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`
      window.location.href = mailtoLink
      
    } catch (error) {
      console.error('フォーム送信エラー:', error)
      alert('送信中にエラーが発生しました。もう一度お試しください。')
    }
  }

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
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                    <p className="text-gray-700">峰田ソーイング</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">住所</h3>
                    <p className="text-gray-700">〒769-2101 香川県さぬき市志度１９９６番地</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">営業時間</h3>
                    <p className="text-gray-700">平日 9:00 - 18:00<br />(土日祝日を除く)</p>
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