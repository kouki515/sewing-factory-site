import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "峰田ソーイング | 高品質な縫製でブランドをサポート",
  description: "高品質な縫製であなたのブランドをサポート。峰田ソーイングは小ロット対応から量産まで、国内一貫生産体制でお客様のニーズにお応えします。香川県さぬき市の縫製専門企業。",
  keywords: "縫製, ソーイング, ユニフォーム, アパレル, 小ロット, 量産, 香川, さぬき市, 峰田ソーイング",
  authors: [{ name: "峰田ソーイング" }],
  creator: "峰田ソーイング",
  publisher: "峰田ソーイング",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://mineta-sewing.com',
    siteName: '峰田ソーイング',
    title: '峰田ソーイング | 高品質な縫製でブランドをサポート',
    description: '高品質な縫製であなたのブランドをサポート。峰田ソーイングは小ロット対応から量産まで、国内一貫生産体制でお客様のニーズにお応えします。',
  },
  twitter: {
    card: 'summary_large_image',
    title: '峰田ソーイング | 高品質な縫製でブランドをサポート',
    description: '高品質な縫製であなたのブランドをサポート。峰田ソーイングは小ロット対応から量産まで、国内一貫生産体制でお客様のニーズにお応えします。',
  },
  verification: {
    google: "XX-preis2eZSbSOHl9AuxkWJ-1f_mEGhtTrqGsTf_xA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // GitHub PagesでSPAのクライアントサイドルーティングを処理
              (function() {
                var redirect = sessionStorage.redirect;
                delete sessionStorage.redirect;
                if (redirect && redirect != location.href) {
                  history.replaceState(null, null, redirect);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
