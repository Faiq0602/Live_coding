const jwt = require('jsonwebtoken')
exports.protect = (req,res,next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return
    res.status(401).json({error: "No Token, Authorization denied"});


jwt.verify(token,process.env.JWT_SECRET,(err,decoded) => {
    if (err) return
    res.status(401).json({error : "Token is not valid"})
    req.user = decoded;
    next();
});
}