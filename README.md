プログラミングスクールTECH::MASTERの個人課題で
エフェクターの情報交換サイトを作成しました。
#　基本機能
/br　メールアドレスによる新規登録、ログイン機能。
　新規登録すると投稿やコメントが出来るようになります。
　投稿するエフェクターには　名前　種類　メーカー　写真を添付してください。
　使用した感想なども一緒に投稿できます。
　投稿されたエフェクターをクリックするとコメントページに移行します。
　持っていたり使ったことがあるなら使用感をコメントすることで情報交換できます。
 ![0fa42a978eb19fbb871f36f1baa7cbfb (1)](https://user-images.githubusercontent.com/60634343/78534093-dbcca880-7824-11ea-9df1-a96c5825f836.jpg)

![47bdf6b2d2e1262aebe93a1a2d3a19a0](https://user-images.githubusercontent.com/60634343/78534185-fa32a400-7824-11ea-96eb-cc458e2f132b.jpg)

![203d2517009cb49301d1bad9ad2f7aab](https://user-images.githubusercontent.com/60634343/78534240-0dde0a80-7825-11ea-8818-d83d4889dbad.jpg)

# 実装した機能
　新規登録・ログイン機能
 投稿機能　
 画像投稿
 コメント投稿　
 非同期通信
 検索機能
 

# 実装したい機能
　コメント削除
　インクリメンタルサーチ
　カテゴリ機能
　

# リンク
http://3.114.226.169:3000/

# テストユーザー

- 管理人アカウント
  - メールアドレス: kanri@gmail.com
  - パスワード: kanri1111

- 一般アカウント
  - メールアドレス名: miku@gmail.com
  - パスワード: minku1111

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null:false|
|email|string|null: false|
|password|string|null: false|
## Association
- has_many :effect
- has_many :comments


## effect
|Column|Type|Options|
|------|----|-------|
|name|bigint||null:false|
|maker|string|null:false|
|attri|string|null:false|
|text|string||
|image|string|null:false|
## Association
- belongs_to: user
- has_many :comments

## comments
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null:false, foreign_key: true|
|effect_id|integer|null:false|
|text|string|null:false|
## Association
- belongs_to: user
- belongs_to: effect

# 使用技術一覧

- Ruby 2.5.1
- Ruby on Rails 5.2.4.2
- MySQL 5.6.47
- Haml 5.1.2
- Sass 3.7.4
- jQuery 3.4.1
- Rspec 3.9
- AWS
- Github
- Ruby on Rails 5.2.4.2
- Github


