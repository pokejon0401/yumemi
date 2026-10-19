# YUMEMI

悪夢や睡眠に悩む大人の女性のための、Astro製オウンドメディアです。

## ローカル開発

Node.js 20以上を用意して実行します。

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

公開URL：<https://pokejon0401.github.io/yumemi/>
