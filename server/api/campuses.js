const router = require('express').Router();
const {
  Campus,
  Student
} = require('../db/models');


router.get('/', (req, res, next) => {
  Campus.findAll({
      include: [{
        model: Student
      }]
    })
    .then(campuses => {
      res.json(campuses);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(Campus => {
      res.json(Campus);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(Campus => {
      res.json(Campus);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(Campus => {
      return Campus.update(req.body);
    })
    .then(Campus => {
      res.json(Campus);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  Campus.destroy({
      where: {
        id: +req.params.id
      }
    })
    .then(res.sendStatus(202))
    .catch(next);
});

module.exports = router;
