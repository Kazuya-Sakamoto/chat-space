<img src="https://cdn-images-1.medium.com/max/959/1*Qc0XxYm-qAZL-7tjjlNfrg.png" width="100"><img src="http://i2.wp.com/samancha.com/wp-content/uploads/2017/12/rails.png?fit=600%2C600" width="100"><img src="http://f.st-hatena.com/images/fotolife/n/nipe880324/20141001/20141001005928.png?1412092889" width="140"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" width="100"><img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" width="140"><img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" width="100">

# Chatアプリ

## 開発環境/言語
- Ruby
- Ruby on Rails
- Haml
- Scss
- Javascript
- jQeary
- ajax
- AWS
- capistrano
- MYSQL
- Git
- GitHub
- Rspec

## Function
- message mew
- user sign_in
- user sign_up
- user sign_out
- user edit
- message create
- group  new
- group create
- group edit
- インクリメンタルサーチ
- 非同期通信
- 自動更新(時間単位)
- AWS
- EC2
- S3
- 自動デプロイ
- 単体テスト
- 統合テスト

# gem
- gem 'pry-rails'
- gem 'capistrano'
- gem 'capistrano-rbenv'
- gem 'capistrano-bundler'
- gem 'capistrano-rails'
- gem 'capistrano3-unicorn'
- gem 'font-awesome-rails'
- gem 'devise'
- gem 'carrierwave'
- gem 'fog-aws'
- gem 'mini_magick'
- gem 'haml-rails'
- gem 'unicorn', '5.4.1'

# Chat_space DB設計　
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|
### Asociation
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|refrences|null: false, foregin_key :true|
|group|id|refrences|null: false, foregin_key :true|
### Asociation
- belong_to: user
- belong_to: group


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Asociation
- has_many :users, through: :group_users
- has_many :messages
- has_many :group_users

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|refrences|null: false, foregin_key :true|
|group|id|refrences|null:false, foregin_key :true|
### Asociation
- belong_to :user
- belong_to :group
