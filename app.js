const express = require ('express'          )
const app = express()

app.get('/',(req,res) => res.send('Test 1!'))

app.listen(process.env.PORT || 3000, () => console.log('App je na portu 3000'))