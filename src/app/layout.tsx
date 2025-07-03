import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "峰田ソーイング | ホーム",
  description: "高品質な縫製であなたのブランドをサポート。峰田ソーイングは小ロット対応から量産まで、国内一貫生産体制でお客様のニーズにお応えします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
