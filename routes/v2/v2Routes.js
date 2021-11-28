const express = require("express");
const router = express.Router();
const controller = require("../../controller/v2/v2Controller");

router.get("/get-api", controller.getApi);
router.post("/post-api", controller.postApi);
router.put("/put-api", controller.putApi);
router.delete("/delete-api", controller.deleteApi);

module.exports = router;