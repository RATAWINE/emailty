const Keys = require("../config/keys");
const stripe = require("stripe")(Keys.stripeSecretKey);
const requireLoggedIn = require("../middleware/requiredLoggedIn");
module.exports = (app) => {
  app.post("/api/stripe", requireLoggedIn, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    console.log(charge);
    req.user.credits += 5;
    const user = req.user.save();
    res.send(user);
  });
};
