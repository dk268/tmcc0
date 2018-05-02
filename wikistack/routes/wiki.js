const express = require("express");
const router = express.Router();
const models = require("../models");
const Page = models.Page;
const User = models.User;
const { userList, userPages } = require("../views");
const addPage = require(`../views/addPage.js`);

router.get("/add", (req, res, next) => {
    res.send(addPage);
})

router.post('/', async (req, res, next) => {
    const [user, wasCreated] = await User.findOrCreate({
        where: {
            name: req.body.name,
            email: req.body.email,
        }
    });

    const page = await Page.create(req.body);
    user.addPage(page);

  try {
    await page.save();
    res.redirect('/'+page.slug);
  } catch (error) { next(error) }
});

module.exports = router;