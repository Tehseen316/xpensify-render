const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  // console.log("🚀 Incoming headers:", req.headers);

  //! Get the token from the header
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "No or invalid token provided" });
  }

  const token = authHeader.split(" ")[1];

  // console.log('Token:', token);
  //!Verify the token
  const verifyToken = jwt.verify(token, "expensify", (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
  if (verifyToken) {
    //!Save the user req obj
    req.user = verifyToken.id;
    next();
  } else {
    const err = new Error("Token expired, login again");
    next(err);
  }
};

module.exports = isAuthenticated;
