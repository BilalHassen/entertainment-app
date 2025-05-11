const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));

require("dotenv").config();

const requireAuth = async (req, res, next) => {
  // verify user authentication
  // access the headers on the request object
  const { authorization } = req.headers;
  console.log("auth header", authorization);

  // check if the headers exists and has a value
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // extract the req string and get the jwt token
  const token = authorization.split(" ")[1];

  try {
    // verify the jwt token, returns a payload object
    const decoded = jwt.verify(token, process.env.SECRET);
    // attach the id to the response so other middlware can access the value
    req.user = await knex("users")
      .where({ id: decoded.id })
      .select("id")
      .first();

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired. Please log in again." });
    }
    return res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
