const knex = require("knex")(require("../knexfile"));

async function HandleUserSignUp(req, res) {
  const { email, password } = req.body;
  try {
    const userResponse = await knex("users").where("email", "=", email);

    if (userResponse.length > 0) {
      throw Error("Email already in use");
    } else {
      await knex("users").insert({ email, password });
      res.status(201).json({ message: "User added successfully" });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  HandleUserSignUp,
};
