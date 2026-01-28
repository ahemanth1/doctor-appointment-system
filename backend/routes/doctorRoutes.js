const express = require("express");
const {
  applyDoctor,
  approveDoctor,
  getAllApprovedDoctors,
} = require("../controllers/doctorController");

const router = express.Router();

// Doctor applies for account
router.post("/apply", applyDoctor);

// Admin approves doctor
router.post("/approve", approveDoctor);

// Get all approved doctors (for users)
router.get("/get-all-approved", getAllApprovedDoctors);

module.exports = router;
