const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      _id: (user = user._id),
      username: user._username,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: user.password,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "8h",
    }
  );
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Not authorised" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "wrong username or password" });
  }
};

module.exports = {
  generateToken,
  isAuth,
};
