プログラミングスクールTECH::MASTERの個人課題で
エフェクターの情報根幹サイトを作成しました。
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
