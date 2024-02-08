const express = require('express');
const router = express.Router();
const {GetAllUsers ,GetUserById,UpdateUserById,DeleteUserById,CreateUser} = require('../controllers/user')
router
    .route('/')  //Sunn BHOSADIKE, sabse main index.js file ke aandar /user ke BAAD WALA ADDRESS '/' CHAIYE
    .get(GetAllUsers)
    .post(CreateUser)

router
    .route('/:id')
    .get(GetUserById)
    .patch(UpdateUserById)
    .delete(DeleteUserById)

module.exports = router;