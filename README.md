# Chat_space DB設計　
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|
### Asociation
- has_many :messages
- has_many :groups, through:group_user 

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|
|user_id|integer|null: false, foregin_key :true|
|group|id|integer|null:false, foregin_key :true|
### Asociation
- belong_to: users
- belong_to: groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Asociation
- has_many :users, through: group_user
- has_many :messages

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foregin_key :true|
|group|id|integer|null:false, foregin_key :true|
### Asociation
- belong_to :users
- belong_to :groups