const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController")
const internController = require("../controllers/internController")
const middleware = require('../middleware/middleware')

router.post("/functionup/colleges", middleware.middleware, collegeController.createColleges)
router.post("/functionup/interns", middleware.middleware, internController.createInterns)
router.get("/functionup/collegeDetails", middleware.middleware, collegeController.getCollegeDetails)

module.exports = router;