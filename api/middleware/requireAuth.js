const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));

const requireAuth = async (req, res, next) => {
  // verify user authentication
  // access the headers on the request object
  const { authorization } = req.headers;
  console.log(authorization);

  // check if the headers exists and has a value
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // extract the req string and get the jwt token
  const token = authorization.split(" ")[1];

  try {
    // verify the jwt token
    const id = jwt.verify(token, process.env.SECRECT);
    // attach the id to the response so other middlware can access the value
    req.user = await knex("users").where({ id: id }).select("user.id");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authroized" });
  }
};

module.exports = requireAuth;
