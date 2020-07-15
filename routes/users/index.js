const express = require('express')
const router = express.Router()

const {
    userRegistration,
    getAllUser,
    userEdit,
    userDelete,
    filterUser
} = require('./controller')

router.post('/', userRegistration)
router.get('/', getAllUser)
router.put('/editUser/:id', userEdit)
router.delete('/:id', userDelete)
router.get('/filter/:name', filterUser)

module.exports = router