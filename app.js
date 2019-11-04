const express = require ('express'          )
const app = express()

app.get('/',(req,res) => res.send('Test 1!'))

app.listen(3000, () => console.log('App je na portu 3000'))