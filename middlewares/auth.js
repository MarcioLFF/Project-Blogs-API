const jwt = require('jsonwebtoken');

const SECRET = 'MEU_SEGREDO';

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(authorization, SECRET);
    req.id = decoded.id;
    } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
};

module.exports = {
    validateToken,
};