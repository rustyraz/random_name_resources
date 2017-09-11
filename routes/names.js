const router = require('express-promise-router')(); //for async await try catch
//import controller functions
const namesController = require('../controllers/names');
//const { validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
  .post(namesController.newName)
  .get(namesController.listNames);

  router.route('/:nameId')
    .get(namesController.getName)
    .patch(namesController.updateName)
    .delete(namesController.deleteName);

module.exports = router;
