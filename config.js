var config = {}

config.gmail = {}
config.recaptcha = {}

config.gmail.user_name = process.env.GMAIL_USERNAME
config.gmail.password = process.env.GMAIL_PASSWORD
config.gmail.from = process.env.GMAIL_FROM
config.gmail.mailTo = process.env.GMAIL_MAILTO
config.recaptcha.secret_key_dev = process.env.RECAPTCHA_SECRET_KEY_DEV
config.recaptcha.site_key_dev = process.env.RECAPTCHA_SITE_KEY_DEV

module.exports = config