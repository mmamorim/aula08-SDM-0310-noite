import sgdb from '../database/sgdb.js'
import express from 'express'

await sgdb.init()

const app = express()

app.get('/', function (req, res) {
  res.send('🚒 Hello World')
})

app.get('/jogos', function (req, res) {
  res.json(sgdb.db.jogos)
})


app.listen(3000, () => {
    console.log('🔥 estou escutando na porta 3000');
})

