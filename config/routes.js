const router = require('express').Router();
const lists = require('../controllers/lists');

router.get('/', (req, res) => res.render('home'));

router.get('/lists', lists.index);

router.get('/lists/new', lists.new);

router.route('/lists/:id')
  .get(lists.show)
  .put(lists.update);

router.get('/lists/:id/edit', lists.edit);

module.exports = router;