function handleErrors(error, req, res, next) {
  console.log(error);
  // Error Code Library
  if (error.code === 400 ) return res.status(400).render('shared/shared-error-page', { errorCode: '400', errorMsg : 'Bad Request'}); // Bad Request
  if (error.code === 401 ) return res.status(401).render('shared/shared-error-page', { errorCode: '401', errorMsg : 'Unauthorized'});//Unauthorized
  if (error.code === 402 ) return res.status(402).render('shared/shared-error-page', { errorCode: '402', errorMsg : 'Payment Required'});//Payment Required
  if (error.code === 403 ) return res.status(403).render('shared/shared-error-page', { errorCode: '403', errorMsg : 'Forbidden'});//Forbidden
  if (error.code === 404 ) return res.status(404).render('shared/shared-error-page', { errorCode: '404', errorMsg : 'Not Found'});//Not Found
  if (error.code === 405 ) return res.status(405).render('shared/shared-error-page', { errorCode: '405', errorMsg : 'Method Not Allowed'});//Method Not Allowed
  if (error.code === 406 ) return res.status(406).render('shared/shared-error-page', { errorCode: '406', errorMsg : 'Not Acceptable'});//Not Acceptable
  if (error.code === 407 ) return res.status(407).render('shared/shared-error-page', { errorCode: '407', errorMsg : 'Proxy Authentication Required'});//Proxy Authentication Required
  if (error.code === 408 ) return res.status(408).render('shared/shared-error-page', { errorCode: '408', errorMsg : 'Request Timeout'});//Request Timeout
  if (error.code === 409 ) return res.status(409).render('shared/shared-error-page', { errorCode: '409', errorMsg : 'Conflict'});//Conflict
  if (error.code === 410 ) return res.status(410).render('shared/shared-error-page', { errorCode: '410', errorMsg : 'Gone'});//Gone
  if (error.code === 411 ) return res.status(411).render('shared/shared-error-page', { errorCode: '411', errorMsg : 'Length Required'});//Length Required
  if (error.code === 412 ) return res.status(412).render('shared/shared-error-page', { errorCode: '412', errorMsg : 'Precondition Failed'});//Precondition Failed
  if (error.code === 413 ) return res.status(413).render('shared/shared-error-page', { errorCode: '413', errorMsg : 'Payload Too Large'});//Payload Too Large
  if (error.code === 414 ) return res.status(414).render('shared/shared-error-page', { errorCode: '414', errorMsg : 'URI Too Long'});//URI Too Long
  if (error.code === 415 ) return res.status(415).render('shared/shared-error-page', { errorCode: '415', errorMsg : 'Unsupported Media Type'});//Unsupported Media Type
  if (error.code === 416 ) return res.status(416).render('shared/shared-error-page', { errorCode: '416', errorMsg : 'Range Not Satisfiable'});//Range Not Satisfiable
  if (error.code === 417 ) return res.status(417).render('shared/shared-error-page', { errorCode: '417', errorMsg : 'Expectation Failed'});//Expectation Failed
  if (error.code === 418 ) return res.status(418).render('shared/shared-error-page', { errorCode: '418', errorMsg : 'I\'m a Teapot'});//I\'m a Teapot
  if (error.code === 421 ) return res.status(421).render('shared/shared-error-page', { errorCode: '421', errorMsg : 'Misdirected Request'});//Misdirected Request
  if (error.code === 422 ) return res.status(422).render('shared/shared-error-page', { errorCode: '422', errorMsg : 'Unprocessable Entity'});//Unprocessable Entity
  if (error.code === 423 ) return res.status(423).render('shared/shared-error-page', { errorCode: '423', errorMsg : 'Locked'});//Locked
  if (error.code === 424 ) return res.status(424).render('shared/shared-error-page', { errorCode: '424', errorMsg : 'Failed Dependency'});//Failed Dependency
  if (error.code === 425 ) return res.status(425).render('shared/shared-error-page', { errorCode: '425', errorMsg : 'Too Early'});//Too Early
  if (error.code === 426 ) return res.status(426).render('shared/shared-error-page', { errorCode: '426', errorMsg : 'Upgrade Required'});//Upgrade Required
  if (error.code === 428 ) return res.status(428).render('shared/shared-error-page', { errorCode: '428', errorMsg : 'Precondition Required'});//Precondition Required
  if (error.code === 429 ) return res.status(429).render('shared/shared-error-page', { errorCode: '429', errorMsg : 'Too Many Requests'});//Too Many Requests
  if (error.code === 431 ) return res.status(431).render('shared/shared-error-page', { errorCode: '431', errorMsg : 'Request Header Fields Too Large'});//Request Header Fields Too Large
  if (error.code === 451 ) return res.status(451).render('shared/shared-error-page', { errorCode: '451', errorMsg : 'Unavailable For Legal Reasons'});//Unavailable For Legal Reasons
  if (error.code === 500 ) return res.status(500).render('shared/shared-error-page', { errorCode: '500', errorMsg : 'Internal Server Error'});//Internal Server Error
  if (error.code === 501 ) return res.status(501).render('shared/shared-error-page', { errorCode: '501', errorMsg : 'Not Implemented'});//Not Implemented
  if (error.code === 502 ) return res.status(502).render('shared/shared-error-page', { errorCode: '502', errorMsg : 'Bad Gateway'});//Bad Gateway
  if (error.code === 503 ) return res.status(503).render('shared/shared-error-page', { errorCode: '503', errorMsg : 'Service Unavailable'});//Service Unavailable
  if (error.code === 504 ) return res.status(504).render('shared/shared-error-page', { errorCode: '504', errorMsg : 'Gateway Timeout'});//Gateway Timeout
  if (error.code === 505 ) return res.status(505).render('shared/shared-error-page', { errorCode: '505', errorMsg : 'HTTP Version Not Supported'});//HTTP Version Not Supported
  if (error.code === 506 ) return res.status(506).render('shared/shared-error-page', { errorCode: '506', errorMsg : 'Variant Also Negotiates'});//Variant Also Negotiates
  if (error.code === 507 ) return res.status(507).render('shared/shared-error-page', { errorCode: '507', errorMsg : 'Insufficient Storage'});//Insufficient Storage
  if (error.code === 508 ) return res.status(508).render('shared/shared-error-page', { errorCode: '508', errorMsg : 'Loop Detected'});//Loop Detected
  if (error.code === 510 ) return res.status(510).render('shared/shared-error-page', { errorCode: '510', errorMsg : 'Not Extended'});//Not Extended
  if (error.code === 511 ) return res.status(511).render('shared/shared-error-page', { errorCode: '511', errorMsg : 'Network Authentication Required'});//Network Authentication Required
  

  // if (error.code === 404) {
  //   return res.status(404).render('shared/404'); //Not Found
  // }

  // if (error.code === 404) return res.status(404).render('shared/shared-error-page', {errorCode: error.code, errorMsg: "Not Found ..."}); //Not Found

  // res.status(500).render('shared/error-pages/500');
  res.status(500).render('shared/shared-error-page', { errorCode: '500', errorMsg : 'Internal Server Error'});
  
}

module.exports = handleErrors;
