var config = {}

config.gmail = {}

config.gmail.user_name = process.env.GMAIL_USERNAME
config.gmail.password = process.env.GMAIL_PASSWORD
config.gmail.from = process.env.GMAIL_FROM
config.gmail.mailTo = process.env.GMAIL_MAILTO 

module.exports = config