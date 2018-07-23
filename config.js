var config = {}

config.gmail = {}
config.recaptcha = {}

config.gmail.user_name = process.env.GMAIL_USERNAME
config.gmail.password = process.env.GMAIL_PASSWORD
config.gmail.from = process.env.GMAIL_FROM
config.gmail.mailTo = process.env.GMAIL_MAILTO
config.recaptcha.secret_key = process.env.RECAPTCHA_SECRET_KEY
config.recaptcha.site_key = process.env.RECAPTCHA_SITE_KEY
config.recaptcha.corpevent.secret_key = process.env.RECAPTCHA_SECRET_KEY_CORPEVENT
config.recaptcha.corpevent.site_key = process.env.RECAPTCHA_SITE_KEY_CORPEVENT

module.exports = config