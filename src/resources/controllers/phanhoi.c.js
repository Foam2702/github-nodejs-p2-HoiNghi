exports.response = (req, res, next) => {
  try {
    const name = req.body.name,
      email = req.body.email,
      phone = req.body.phone;

    res.render("response", {
      name: name,
      mail: email,
      phone: phone,
    });
  } catch (err) {
    next(err);
  }
};
