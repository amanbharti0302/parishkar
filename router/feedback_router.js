const express = require('express');

const feedback_controller =  require('../conttroller/feedback_controller');

const router = express.Router();

router.post('/new',feedback_controller.newfeedback);
router.post('/update/good',feedback_controller.updategood);
router.post('/update/bad',feedback_controller.updatebad);
router.post('/update/normal',feedback_controller.updatenormal);
router.get('/get',feedback_controller.feedbackpage);
router.post('/get',feedback_controller.getfeedback);
module.exports=router;