const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const cors = require("cors")
const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-clinic => GET
router.get('/add-clinic', cors(), auth, admin, adminController.getAddClinic);

// /admin/add-clinic => POST
router.post('/add-clinic', cors(), auth, admin, adminController.postAddClinic);

// /admin/edit-clinic/:clinicId => GET
//router.get('/edit-clinic/:clinicId', cors(), auth, admin, adminController.getEditClinic);

// /admin/edit-clinic => POST
//router.post('/edit-clinic', cors(), auth, admin, adminController.postEditClinic);

// /admin/delete-clinic => POST
//router.post('/delete-clinic', cors(), auth, admin, adminController.postDeleteClinic);

module.exports = router;
