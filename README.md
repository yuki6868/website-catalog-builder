# website-catalog-builder

> Webサイトのパーツを選んで、組み合わせながらプレビューできるシンプルなカタログ型サイトビルダー

---

## 概要

**website-catalog-builder** は、Webサイトを構成する各パーツ（Header / Hero / Section / Footer など）をカタログ形式で選択し、リアルタイムで組み合わせてプレビューできるフロントエンドアプリです。

パーツを視覚的に選びながら、サイト構成を直感的に試すことができます。

---

## 特徴

* カテゴリごとにパーツを整理（Header / Hero / Section / Footer）
* 同一カテゴリは1つのみ選択可能
* 選択状態が一目でわかるUI（選択中 / 変更 / 追加）
* サムネイル付きで直感的に選択可能
* 選択内容が即プレビューに反映
* プレビューは固定表示で常に確認可能
* データ駆動でパーツ管理（拡張しやすい設計）

---

## 想定用途

* Web制作の学習用教材
* UI / コンポーネント設計の練習
* サイト構成のモック作成
* パーツ組み合わせの検証
* ポートフォリオ用デモ
* ユーザーのサイト作成補助

---

## 画面構成

### パーツ一覧

カテゴリごとにパーツを表示。
サムネイル・名前・操作ボタンから選択可能。

### 選択済みパーツ

現在の構成を確認・削除可能。

### プレビュー

選択したパーツを組み合わせたサイトをリアルタイム表示。

---

## パーツカテゴリ

* Header
* Hero
* Section
* Footer

---

## 仕様

* 各カテゴリにつき1パーツのみ選択可能
* 既に選択済みの場合は「変更」扱い
* サムネイルは `images/` 配下で管理
* パーツはデータ定義ベースで描画

---

## データ構造

各パーツは以下の情報を持ちます：

* `id`
* `category`
* `name`
* `thumbnailClass`
* `thumbnailLabel`
* `thumbnailImage`
* `html`
* `css`
* `init`

UIとプレビューを一元管理できる構成になっています

---

## ディレクトリ構成

```
website-catalog-builder/
├── index.html
├── style.css
├── script.js
├── data
|   └── parts.js
└── images/
    ├── header-simple.png
    ├── header-centered.png
    ├── hero-simple.png
    ├── hero-image.png
    ├── cards-simple.png
    ├── section-text.png
    ├── footer-simple.png
    └── footer-dark.png
```

---

## セットアップ

```bash
git clone <repository-url>
cd website-catalog-builder
```

`index.html` をブラウザで開くだけで動作します。

---

## 使い方

1. パーツ一覧から好きなパーツを選択
2. 各カテゴリごとに構成を決定
3. プレビューで完成イメージを確認
4. 必要に応じてパーツを変更

---

## 今後の拡張案

* パーツの並び替え
* テキスト編集機能
* テーマ / カラーカスタマイズ
* 保存・読み込み機能
* HTMLエクスポート
* レスポンシブプレビュー
* パーツ追加UI

---

## ライセンス

MIT License

---
