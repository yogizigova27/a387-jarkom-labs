'use strict'

const express = require('express')

const PORT = 8000
const HOST = '10.0.0.0/24'

const app = express()
app.get('/', (req, res) => {
    res.send('Yogi Zigova Eka Putra\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
