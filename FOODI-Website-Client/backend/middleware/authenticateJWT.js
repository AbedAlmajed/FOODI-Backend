

// const jwt = require('jsonwebtoken');

// function authenticateJWT(req, res, next) {
//   const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // console.log('Decoded token:', JSON.stringify(decoded)); // Improved logging

//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(400).json({ message: 'Invalid token.' });
//   }
// }





// module.exports = {authenticateJWT};










const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', JSON.stringify(decoded));

    if (decoded.isDriver) {
      req.driver = decoded;
    } else {
      req.user = decoded;
    }
    
    next();
  } catch (ex) {
    res.status(400).json({ message: 'Invalid token.' });
  }
}

function authenticateDriver(req, res, next) {
  authenticateJWT(req, res, () => {
    if (req.driver) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. Driver privileges required.' });
    }
  });
}

function authenticateUser(req, res, next) {
  authenticateJWT(req, res, () => {
    if (req.user) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. User privileges required.' });
    }
  });
}

module.exports = { authenticateJWT, authenticateDriver, authenticateUser };