json.array! @message do |message|
    json.content  message.content
    json.user_id  message.user_id
    json.user_name  message.user.name
    json.date message.created_at
    json.image message.image.url
end