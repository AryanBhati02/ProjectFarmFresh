// middleware/auth.js
module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.session && req.session.userId) return next();
    req.session.error = 'You must be logged in to access that page.';
    return res.redirect('/auth/login');
  },

  ensureGuest: (req, res, next) => {
    if (!req.session || !req.session.userId) return next();
    return res.redirect('/');
  }
};
