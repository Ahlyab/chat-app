import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // prevent xss attack
    sameSite: "strict", // CSRF attacks
    secure: process.env.NODE_ENV !== "production", // cookie only works in
  });
};

export default generateTokenAndSetCookie;