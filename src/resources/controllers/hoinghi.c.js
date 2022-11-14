const hoinghiM = require("../models/hoinghi.m");

exports.signUp = (req, res, next) => {
  try {
    res.render("signup");
  } catch (err) {
    next(err);
  }
};
