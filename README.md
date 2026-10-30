# YUMEMI

悪夢や睡眠に悩む大人の女性のための、Astro製オウンドメディアです。

## ローカル開発

Node.js 24を用意して実行します。

```bash
npm install
npm run dev
```

公開前の確認：

```bash
npm run build
```

## 記事を追加する

`src/content/articles/_template.md.txt` を英語スラッグ名の `.md` としてコピーし、本文とfrontmatterを編集します。

```text
src/content/articles/nightmare-after-drinking.md
```

`draft: true` の記事は一覧・カテゴリ・サイトマップ・公開ページに出ません。編集チェックと出典確認が終わった記事だけ `draft: false` に変更してください。

詳しいルールは [AGENTS.md](AGENTS.md) と [編集・SEOガイド](docs/EDITORIAL.md) を参照してください。

## デプロイ

`main` へのpushで `.github/workflows/deploy.yml` がAstroをビルドし、GitHub Pagesへ公開します。GitHubのリポジトリ設定で Pages のSourceを **GitHub Actions** にしてください。

公開URL：<https://yumemi-official.com/>

## アクセス計測（GA4）

GitHubリポジトリの Settings → Secrets and variables → Actions → Variables に
`PUBLIC_GA_MEASUREMENT_ID`（値：GA4の `G-` から始まる測定ID）を追加し、
Deploy Astro to GitHub Pages を再実行してください。
ID未設定時と `npm run dev` では計測タグを出力しません。
ローカルで本番タグを検証する場合は `PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build` を使います。

GA4のウェブストリームURLは `https://yumemi-official.com` に設定します。
初期設定では拡張計測の「ページビュー」「スクロール」「離脱クリック」のみを有効にし、
フォーム操作・サイト内検索は無効にしてください。氏名やメールアドレスなどの個人情報をイベントに送らないでください。
ページビューはGoogleタグの自動送信を使い、手動で重複送信しません。
広告向けのGoogleシグナルとパーソナライズはタグ側で無効化しています。

公開後にサイトを開き、GA4のリアルタイムレポートでアクセスを確認してください。
広告ブロッカーやブラウザ設定により記録されないアクセスもあります。
計測開始前のPVは復元できません。

運用では毎週「表示回数（PV）・アクティブユーザー・流入元・記事別表示回数」を記録します。
検索流入の改善にはGoogle Search Consoleにもドメインを登録し、
`https://yumemi-official.com/sitemap-index.xml` を送信します。
検索クエリ・表示回数・クリック数・CTR・平均掲載順位から改善対象の記事を選びます。
