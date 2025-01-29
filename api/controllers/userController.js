const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET, {
    expiresIn: "3d",
  });
};

async function handleUserSignUp(req, res) {
  // get the formdata from the request body
  const { email, password } = req.body;
  let isErrors = {};
  try {
    // Validate email
    if (!email.trim()) {
      isErrors["email"] = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      isErrors["email"] = "Invalid email format";
    }

    // Validate password
    if (!password.trim()) {
      isErrors["password"] = "Password is required";
    } else if (password.length < 8) {
      isErrors["password"] = "Password must be longer than 8 characters";
    }

    // If there are validation errors, send the response
    if (Object.keys(isErrors).length > 0) {
      return res.status(400).json({ errors: isErrors });
    }

    // queryt the database to check if the email exists
    const userResponse = await knex("users").where("email", "=", email);

    // check if the user table already has this email
    if (userResponse.length > 0) {
      throw Error("Email already in use");
    } else {
      // random string of characters added to the user password before its added
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      // insert the email and hashed password
      await knex("users").insert({ email, password: hash });
      const userId = await knex("users")
        .where("email", "=", email)
        .select("users.id");
      console.log("userid:", userId);
      // call the create token function
      const token = createToken(userId[0].id);

      // send a 201 created response with a json object
      res.status(201).json({ email: email, token: token });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    // send a bad request error
    res.status(400).json({ message: err.message });
  }
}

async function handleUserSignIn(req, res) {
  // get the formdata from the request body
  const { email, password } = req.body;
  let isErrors = {};
  try {
    // Validate email
    if (!email.trim()) {
      isErrors["email"] = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      isErrors["email"] = "Invalid email format";
    }

    // Validate password
    if (!password.trim()) {
      isErrors["password"] = "Password is required";
    } else if (password.length < 8) {
      isErrors["password"] = "Password must be longer than 8 characters";
    }

    // If there are validation errors, send the response
    if (Object.keys(isErrors).length > 0) {
      return res.status(400).json({ errors: isErrors });
    }

    // queryt the database to check if the email exists
    const userResponse = await knex("users")
      .where("email", "=", email)
      .select("*");

    if (userResponse.length === 1) {
      const existingUser = userResponse[0];

      const match = await bcrypt.compare(password, existingUser.password);

      if (!match) {
        throw Error("Incorrect password");
      }
      const token = createToken(existingUser.id);

      // send a 201 created response with a json object
      res.status(201).json({ email, token });
    } else {
      throw Error("invalid email");
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    // send a bad request error
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  handleUserSignUp,
  handleUserSignIn,
};
