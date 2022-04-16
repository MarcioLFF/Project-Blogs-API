const validateEmail = async (req, res, next) => {
    const { email } = req.body;

    if (email === undefined) {
        return res.status(400).json({ message: '"email" is required' });
    }

    if (!email.length) {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }

    next();
};

const validadePassword = async (req, res, next) => {
    const { password } = req.body;
    if (password === undefined) {
        return res.status(400).json({ message: '"password" is required' });
    }
    if (!password.length) {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }
   
    next();
};

module.exports = {
    validateEmail,
    validadePassword,
};