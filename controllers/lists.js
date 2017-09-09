const List = require('../models/list');

function listsIndex(req, res) {
  List
    .find()
    .exec()
    .then(lists => res.render('lists/index', { lists }))
    .catch(err => res.render('error', {err}));
}

module.exports = {
  index: listsIndex
};
