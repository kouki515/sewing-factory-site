import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "お問い合わせ | 峰田ソーイング",
  description: "峰田ソーイングへのお問い合わせはこちらから。縫製に関するご相談、見積もり依頼、その他お気軽にお問い合わせください。迅速にお返事いたします。",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
