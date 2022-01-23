const errorHandlerMiddleware = require('./error-handler');

function protectRoutes(req, res, next) {
  if (!res.locals.isAuth) {
    // return res.redirect('/401');
    return res
      .status(401)
      .render('shared/shared-error-page', {
        errorCode: '401',
        errorMsg: 'Unauthorized',
      }); //Unauthorized
  }

  if (req.path.startsWith('/admin') && !res.locals.isAdmin) {
    // return res.redirect('/403');

    return res
      .status(403)
      .render('shared/shared-error-page', {
        errorCode: '403',
        errorMsg: 'Forbidden',
      }); //Forbidden
  }

  next();
}

module.exports = protectRoutes;
