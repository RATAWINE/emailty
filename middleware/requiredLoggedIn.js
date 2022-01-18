module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(400).send({ error: "You must log in!" });
  }
  next();
};
