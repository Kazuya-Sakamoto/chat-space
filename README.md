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
