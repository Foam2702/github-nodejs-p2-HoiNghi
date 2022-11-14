const { urlencoded } = require("body-parser");
const express = require("express"),
  hbs = require("express-handlebars"),
  path = require("path"),
  bodyparser = require("body-parser");
(app = express()), (port = 3000);
app.use(bodyparser.urlencoded({ extended: true }));

app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    defaultLayout: "container.hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources//views"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home", { title: "MVC" });
});
app.post("/signup", (req, res) => {
  res.render("signup");
});
app.post("/response", (req, res) => {
  const name = req.body.name,
    email = req.body.email,
    phone = req.body.phone;

  res.render("response", {
    name: name,
    mail: email,
    phone: phone,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
