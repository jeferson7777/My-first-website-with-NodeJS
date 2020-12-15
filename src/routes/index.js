const { Router } = require("express");
const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
  //__dirname esta constante de express nos dice donde esta el archivo
  res.render('index.html', {title: 'First website'});
});

router.get("/family", (req, res) => {
  res.render('family.html', { title: 'Family' });
});

router.get("/friends", (req, res) => {
  res.render("friends.html", { title: "Friends" });
});


router.get("/projects", (req, res) => {
  res.render("projects.html", { title: "Projects" });
});

module.exports = router;