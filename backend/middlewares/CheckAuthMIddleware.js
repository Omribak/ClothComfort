const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.checkAuhtMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized User'
    });
  }

  try {
    // Verify the token and get the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const userId = decoded._id; // Assuming 'id' is stored in the token

    // Fetch the user from the database
    const user = await User.findById(userId).select('-password');
    // If the user is not found or inactive, return an error
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'User not found or unauthorized'
      });
    }
    // Attach the user to the request object
    req.user = user;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    res.status(401).json({
      status: 'error',
      message: 'Unauthorized User'
    });
  }
};
