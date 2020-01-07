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
