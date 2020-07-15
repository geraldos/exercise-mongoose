const express = require('express')
const app = express()

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use('/api/users', require('./routes/users'))

const {
    PORT
} = require('./config')
const {
    db
} = require('./config')

app.get('/', (req, res) => {
    res.send('Welcome to mongoose demo')
})

if (db) {
    console.log(`Connected to database `)
    app.listen(PORT, () => {
        console.log(`Server runs on your port ${PORT}`)
    })
}