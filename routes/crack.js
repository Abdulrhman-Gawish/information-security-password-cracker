const express = require("express");
const router = express.Router();
const attacks = require("../services/attack");
router.route("/").post((req, res) => {
  const dictionaryResult = attacks.dictionaryAttack();
  if (dictionaryResult) {
    return res.json({
      method: "Dictionary Attack",
      password: dictionaryResult,
    });
  }
  return res.json({
    method: "Brute Force Attack",
    password: attacks.bruteForceAttack(),
  });
});

module.exports = router;
