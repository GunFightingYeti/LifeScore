const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Achievement
      .find(req.query)
      .sort({ date: 1 })
      .then(dbModel => {
        res.json(dbModel); })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Achievement
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    db.Achievement
      .find({category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySaved: function(req, res) {
    db.Achievement
      .find({saved: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllPassed: function(req, res) {
    db.Achievement
      .find({passed: true})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Achievement
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Achievement
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSaved: function(req, res) {
    db.Achievement
      .findOneAndUpdate({ _id: req.params.id }, {$set:{saved: true}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Achievement
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
