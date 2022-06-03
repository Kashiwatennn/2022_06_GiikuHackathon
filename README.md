# melon-app

サポーターズハッカソン参加用リポジトリ

# 作成物

メールアドレスとサービスを紐づけて記憶しておくサービス

# 使用技術（暫定）

react,typescript,styled-components,chakra ui,firebase,eslint,prettier

# 推奨環境

nodejs v14.17.0
vscode

# 最初の立ち上げ方法

1. `git clone git@github.com:it-tsumugi/melon-app.git`
2. リポジトリのルートディレクトリに移動 
3. `npm install`
4. `npm start` 

# 開発の流れ

1. `git pull origin main`
2. `git branch issueの番号`
3. `git switch 対象ブランチ`
4. 変更作業を行う
5. `git add .`(カレントディレクトリより下しかステージされないので注意)
6. `git commit -m '作業内容'`
7. `git push origin main`(エラーが出たらslackに投げてください)

## たまに使うコマンド
- git merge
- git revert
- git checkout
- git stack
- git log

# コーディング規則

- default エクスポートしない
- 関数コンポーネントを使う

# おすすめ vscode 拡張機能

- Auto Close Tag
- Auto Import
- Auto Import - ES6,TS,JSX,TSX

# 参考文献

create-react-app の使い方
https://qiita.com/sanogemaru/items/05c2e9381d6ba2d9fccf
