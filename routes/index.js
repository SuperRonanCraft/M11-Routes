const router = require("express").Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require("./tips");
const feedbackRouter = require("./feedback");
// TODO: import your diagnostics route
const feedbackRouter = require("./diagnostics");

router.use("/tips", tipsRouter);
router.use("/feedback", feedbackRouter);
// TODO: Initialize diagnostics route
router.use("/diagnostics", feedbackRouter);

module.exports = router;
