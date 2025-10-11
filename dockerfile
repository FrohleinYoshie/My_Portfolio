FROM node:20-alpine

# 必要なパッケージをインストール
RUN apk add --no-cache git

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール（本番用とdev用の両方を含める）
RUN npm ci --prefer-offline --no-audit

# ソースコードをコピー
COPY . .

# ポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]