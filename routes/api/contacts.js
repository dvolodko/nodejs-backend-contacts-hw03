const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody, isValidId, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getContactById);

// multerUpload.fields([{name: 'cover', maxCount: 1}, {name: 'subcover', maxCount: 2}]);
// multerUpload.array('cover', 8);
router.post(
  '/',
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete('/:contactId', authenticate, isValidId, ctrl.removeContact);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
