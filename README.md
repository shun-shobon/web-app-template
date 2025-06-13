# Web App Template

このプロジェクトは、モダンなWebアプリケーション開発のためのテンプレートです。

## 技術スタック

### ランタイム・環境
- **Node.js**: 22.16.0
- **パッケージマネージャー**: pnpm 10.12.1

### フロントエンド
- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **UIライブラリ**: Mantine 8.1.0 (@mantine/core, @mantine/hooks)

### ビルドツール・開発環境
- **バンドラー**: Vite 6.3.5
- **Reactプラグイン**: @vitejs/plugin-react 4.5.1
- **パス解決**: vite-tsconfig-paths 5.1.4

### コード品質・フォーマット
- **ESLint**: 9.28.0
- **スタイルガイド**: @shun-shobon/style-guide 0.4.1
- **Prettier**: 3.5.3

### TypeScript設定
- **ベース設定**: @tsconfig/strictest 2.0.5
- **JSX**: react-jsx
- **モジュール解決**: bundler
- **パスエイリアス**: `~/*` → `./src/*`

## ディレクトリ構成

```
web-app-template/
├── .cursor/                 # Cursor IDE設定
│   └── rules/              # Cursor Rules定義
├── src/                    # ソースコード
│   ├── components/         # Reactコンポーネント
│   ├── index.tsx          # アプリケーションエントリーポイント
│   └── theme.ts           # Mantineテーマ設定
├── eslint.config.js       # ESLint設定
├── index.html             # HTMLテンプレート
├── mise.toml              # 開発環境バージョン管理
├── package.json           # npm依存関係・スクリプト
├── pnpm-lock.yaml         # pnpmロックファイル
├── prettier.config.js     # Prettier設定
├── renovate.json          # 依存関係自動更新設定
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Viteビルド設定
├── README.md              # プロジェクト説明
└── LICENSE                # ライセンス
```

## 🛠 セットアップ

### 必要要件
- Node.js 22.16.0
- pnpm 10.12.1

### インストール

```bash
# 依存関係のインストール
pnpm install
```

## 使用可能なスクリプト

```bash
# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# コードのフォーマット
pnpm format

# フォーマットのチェック
pnpm format:check

# リンター実行
pnpm lint

# リンターの自動修正
pnpm lint:fix
```

## 主な機能

- **React 19.1.0**: 最新のReact機能を活用
- **TypeScript**: 型安全な開発環境
- **Mantine**: モダンなUIコンポーネント
- **Vite**: 高速な開発サーバーとビルド
- **ESLint + Prettier**: 一貫したコード品質
- **パスエイリアス**: `~/*` でsrcディレクトリへの簡潔なインポート

## 開発ガイドライン

### パス解決とエイリアス
TypeScript設定で以下のパスエイリアスが定義されています：
- `~/*` → `./src/*`

例：
```typescript
import { Component } from '~/components/Component'
```

### 命名規則
- **コンポーネント**: PascalCase（例：`App.tsx`、`MyComponent.tsx`）
- **ディレクトリ**: 小文字（例：`components`、`hooks`、`utils`）
- **ファイル**: コンポーネントはPascalCase、その他はkebab-case

### コンポーネント配置
- Reactコンポーネントは `src/components/` に配置
- デフォルトエクスポートを使用
- 機能やページ単位でサブディレクトリを作成可能

## 依存関係管理

- **Renovate**: 依存関係の自動更新
- **mise**: 開発環境のバージョン管理
