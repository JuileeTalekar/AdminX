const adminMiddleware = (req, res, next) => {
    try {
        const adminRole = req.user.isAdmin;

      
        if (!adminRole) {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

       
        next();

    } catch (error) {
        // next(error); // Pass error to error handler instead of sending generic JSON
        console.log(error);
        return res.status(500).json({ message: 'Internal server error from admin middleware' });
    }
};

module.exports = adminMiddleware;