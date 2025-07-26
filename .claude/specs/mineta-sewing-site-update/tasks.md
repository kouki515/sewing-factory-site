# 峰田ソーイングサイト修正 具体的タスクリスト

## Phase 1: 事前準備

### Task 1.1: 画像ファイル確認
- [ ] `public/images/representative_photo.jpg` ファイルの存在確認
- [ ] 画像ファイルが存在しない場合の代替案検討
- [ ] 画像サイズ・フォーマットの確認

### Task 1.2: 開発環境確認
- [ ] `npm run dev` でローカル開発サーバーが正常起動することを確認
- [ ] 現在のビルド状態確認: `npm run build`
- [ ] 既存のlint状態確認: `npm run lint`

## Phase 2: フッター修正 (`src/components/Footer.tsx`)

### Task 2.1: 会社情報更新
- [ ] line 32: `縫製工場株式会社` → `株式会社峰田ソーイング` に変更
- [ ] line 33: `法人番号: 0123-45-678910` → `法人番号: 9470001020256` に変更
- [ ] line 34: `&copy; 2025 縫製工場株式会社` → `&copy; 2025 株式会社峰田ソーイング` に変更

### Task 2.2: プライバシーポリシー削除
- [ ] lines 35-39のプライバシーポリシーリンク部分を完全削除
```jsx
// 削除対象
<p>
  <a href="#" className="hover:text-blue-700 transition-colors duration-200">
    プライバシーポリシー
  </a>
</p>
```

### Task 2.3: フッター修正確認
- [ ] ローカル環境でフッターの表示確認
- [ ] 全ページでフッターが正しく表示されることを確認
- [ ] レスポンシブデザインの動作確認

## Phase 3: ホームページ修正 (`src/app/page.tsx`)

### Task 3.1: 最新情報セクション削除
- [ ] lines 52-72の「最新情報」セクション全体を削除
```jsx
// 削除対象
{/* Latest News Section */}
<section className="py-8 md:py-16 px-4 max-w-6xl mx-auto bg-gray-50/50">
  // セクション内容全体
</section>
```

### Task 3.2: ホームページ表示確認
- [ ] 削除後のレイアウトに問題がないことを確認
- [ ] Hero Section → Features Section の流れが自然であることを確認
- [ ] モバイル・デスクトップ両方での表示確認

## Phase 4: aboutページ修正 (`src/app/about/page.tsx`)

### Task 4.1: 会社情報更新
- [ ] line 37: `東京都台東区○○1-2-3` → `香川県さぬき市志度１９９６番地` に変更

### Task 4.2: 代表者写真変更
- [ ] lines 95-96: プレースホルダーをrepresentative_photo.jpgに変更
```jsx
// 現在
<div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
  <span className="text-gray-600 text-sm">代表者写真</span>
</div>

// 変更後
<div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 overflow-hidden rounded-full">
  <Image
    src="/images/representative_photo.jpg"
    alt="代表取締役社長 山田太郎"
    width={160}
    height={160}
    className="object-cover w-full h-full"
  />
</div>
```

### Task 4.3: 沿革セクション削除
- [ ] lines 52-83の「沿革」セクション全体を削除
```jsx
// 削除対象
<section className="mb-12 md:mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
    沿革
    // セクション内容全体
  </h2>
</section>
```

### Task 4.4: 理念・ミッションセクション削除
- [ ] lines 168-187の「理念・ミッション」セクション全体を削除
```jsx
// 削除対象
<section className="mb-12 md:mb-16">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative">
    理念・ミッション
    // セクション内容全体
  </h2>
</section>
```

### Task 4.5: aboutページ表示確認
- [ ] 削除後のページ構成確認
- [ ] 代表者写真の正常表示確認
- [ ] レスポンシブデザインの動作確認

## Phase 5: galleryページ修正 (`src/app/gallery/page.tsx`)

### Task 5.1: 商品削除 - フォーマルドレス
- [ ] lines 27-30: `LINE_ALBUM_20250620_250703_16.jpg` (フォーマルドレス) を削除
```jsx
// 削除対象
{
  src: "/sewing-factory-site/images/LINE_ALBUM_20250620_250703_16.jpg",
  alt: "フォーマルドレス",
  category: "フォーマルウェア"
},
```

### Task 5.2: 商品削除 - ブラウス
- [ ] lines 37-40: `LINE_ALBUM_20250620_250703_26.jpg` (ブラウス) を削除
```jsx
// 削除対象
{
  src: "/sewing-factory-site/images/LINE_ALBUM_20250620_250703_26.jpg",
  alt: "ブラウス",
  category: "レディースウェア"
},
```

### Task 5.3: 商品削除 - カジュアルシャツ
- [ ] lines 42-45: `LINE_ALBUM_20250620_250703_27.jpg` (カジュアルシャツ) を削除
```jsx
// 削除対象
{
  src: "/sewing-factory-site/images/LINE_ALBUM_20250620_250703_27.jpg",
  alt: "カジュアルシャツ",
  category: "カジュアルウェア"
},
```

### Task 5.4: galleryページ表示確認
- [ ] 削除後に6つの商品が正しく表示されることを確認
- [ ] グリッドレイアウトが正常であることを確認
- [ ] 画像の読み込みが正常であることを確認

## Phase 6: contactページ修正 (`src/app/contact/page.tsx`)

### Task 6.1: 会社情報更新
- [ ] line 118: `縫製工場株式会社` → `峰田ソーイング` に変更
- [ ] line 122: `〒123-4567<br />東京都台東区○○1-2-3` → `〒769-2101 香川県さぬき市志度１９９６番地` に変更

### Task 6.2: 不要な情報削除
- [ ] lines 124-127: 電話番号セクション全体を削除
```jsx
// 削除対象
<div>
  <h3 className="font-semibold text-blue-900 mb-2">電話番号</h3>
  <p className="text-gray-700">03-1234-5678</p>
</div>
```

- [ ] lines 128-131: メールアドレスセクション全体を削除
```jsx
// 削除対象
<div>
  <h3 className="font-semibold text-blue-900 mb-2">メールアドレス</h3>
  <p className="text-gray-700">info@example.com</p>
</div>
```

### Task 6.3: 営業時間の誤字修正
- [ ] line 134: `土日祖日・祥日を除く` → `土日祝日を除く` に変更

### Task 6.4: フォーム機能実装
- [ ] フォーム送信ハンドラーの実装
- [ ] `mailto:kusumikouki0515@gmail.com` による送信機能の追加
- [ ] フォームデータの適切なフォーマット化
- [ ] 送信成功・失敗のフィードバック実装

**具体的実装コード例:**
```jsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  
  const subject = `【峰田ソーイング】${formData.get('subject')}のお問い合わせ`
  const body = `
会社・団体名: ${formData.get('company')}
お名前: ${formData.get('name')}
メールアドレス: ${formData.get('email')}
電話番号: ${formData.get('phone')}
お問い合わせ種別: ${formData.get('subject')}

お問い合わせ内容:
${formData.get('message')}
  `.trim()
  
  const mailtoLink = `mailto:kusumikouki0515@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoLink
}
```

### Task 6.5: contactページ表示確認
- [ ] フォーム送信機能の動作確認
- [ ] 会社情報の正しい表示確認
- [ ] 削除された情報が表示されていないことを確認

## Phase 7: 総合テスト・品質確認

### Task 7.1: ビルド確認
- [ ] `npm run build` が成功することを確認
- [ ] ビルドエラーやワーニングがないことを確認
- [ ] 静的エクスポートが正常に動作することを確認

### Task 7.2: 全ページ表示確認
- [ ] ホームページ (/) の正常表示
- [ ] aboutページ (/about) の正常表示
- [ ] galleryページ (/gallery) の正常表示
- [ ] contactページ (/contact) の正常表示
- [ ] その他のページ (/factory, /services, etc.) の影響確認

### Task 7.3: 機能テスト
- [ ] ナビゲーションリンクの動作確認
- [ ] フォーム送信機能の動作確認
- [ ] レスポンシブデザインの動作確認（モバイル・タブレット・デスクトップ）
- [ ] 画像の読み込み確認

### Task 7.4: Lint・型チェック
- [ ] `npm run lint` でlintエラーがないことを確認
- [ ] TypeScriptの型エラーがないことを確認

## Phase 8: 最終確認・完了

### Task 8.1: 修正項目の最終チェック
- [ ] フッター: 会社名・法人番号変更、プライバシーポリシー削除 ✓
- [ ] ホーム: 最新情報セクション削除 ✓
- [ ] about: 住所変更、沿革・理念削除、代表写真変更 ✓
- [ ] gallery: 3つの商品削除 ✓
- [ ] contact: フォーム機能追加、会社情報更新 ✓

### Task 8.2: パフォーマンス確認
- [ ] ページ読み込み速度の確認
- [ ] 画像最適化の確認
- [ ] 不要なコードが削除されていることの確認

### Task 8.3: 完了レポート作成
- [ ] 実装完了項目の一覧作成
- [ ] 変更点の要約作成
- [ ] 今後のメンテナンス項目の整理

## 注意事項

1. **画像ファイル**: representative_photo.jpg が存在しない場合は事前に準備が必要
2. **バックアップ**: 修正前に現在のコードのバックアップを取ることを推奨
3. **段階的実装**: 各フェーズごとに動作確認を行い、問題があれば次のフェーズに進まない
4. **レスポンシブ対応**: 各修正後にモバイル・デスクトップ両方での表示確認を必須とする
5. **git管理**: 各フェーズ完了後にcommitを作成し、変更履歴を管理する

このタスクリストに従って実装することで、確実で品質の高い修正が完了できます。