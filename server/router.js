const router = require('express').Router();
const contractor = require('./controllers/contractors.controllers');

router.get('/:name', contractor.getAll)
router.post('/', contractor.postContractor)
router.delete('/:id', contractor.deleteContractor)


module.exports = router;