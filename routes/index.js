const express = require("express");
const router = express.Router();
const path = require("path");

//* Route หน้า Home
router.get("/", (req, res) => {
  res.render("layout", { title: "Home", body: "index" });
});

//* Route หน้า About
router.get("/about", (req, res) => {
  res.render("layout", { title: "About", body: "about" });
});

//* Route หน้า Contact
router.get("/contact", (req, res) => {
  res.render("layout", { title: "Contact", body: "contact" });
});

module.exports = router;
