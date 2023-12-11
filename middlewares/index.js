const validateBody = require('./validateBody');
const isValidId = require('./isValidId');
const authenticate = require('./authenticate');
const multerUpload = require('./multer');

module.exports = { validateBody, isValidId, authenticate, multerUpload };
