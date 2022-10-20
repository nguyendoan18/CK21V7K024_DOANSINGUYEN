//ĐOÀN SĨ NGUYÊN CK21V7K024
const express = require("express");
const contact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contact.profile)
    .post(contact.profilePost)

module.exports = router;