const express = require('express')
const app = express()

app.get('/', (_req, res) => res.send('hello from js!'))
app.listen(process.env.PORT || 3000)

module.exports = app