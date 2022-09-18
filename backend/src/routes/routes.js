const express = require("express");
const formcontroller=require('../middleware/addformstruct');
let router = express.Router();

router
  .route("/newform")
  .post(formcontroller.addForm);
router.route("/formlist").get(formcontroller.formlist);
router.route("/formstruct/:id").get(formcontroller.formstruct);
router.route("/formdata").post(formcontroller.addFormData);
router.route("/gensheet").post(formcontroller.generatesheet);
router.route("/getslang").get(formcontroller.slanglist);
module.exports = router;