const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const cors = require("cors")
const adminController = require('../controllers/admin');
const noCache = require('../middleware/noCache');

const router = express.Router();

// /admin/show-clinic => GET
router.get('/show-clinic', cors(), noCache, auth, admin, adminController.getAddClinic);

// /admin/add-clinic => POST
router.post('/add-clinic', cors(), noCache, auth, admin, adminController.postAddClinic);

// /admin/add-clinic => GET
router.get('/add-clinic', cors(), noCache, auth, admin, adminController.showAddClinic);

// /admin/show-clinic-created => GET
router.get('/show-clinic-created', noCache, cors(), auth, admin, adminController.success);


// /admin/edit-clinic/:clinicId => GET
//router.get('/edit-clinic/:clinicId', cors(), auth, admin, adminController.getEditClinic);

// /admin/edit-clinic => POST
//router.post('/edit-clinic', cors(), auth, admin, adminController.postEditClinic);

// /admin/delete-clinic => POST
//router.post('/delete-clinic', cors(), auth, admin, adminController.postDeleteClinic);

module.exports = router;
