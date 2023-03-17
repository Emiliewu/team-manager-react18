const Player = require('../models/player.model');

module.exports = {
  findAllPlayers(req, res) {
    Player.find({}).sort('name')
      .then(players => res.json(players))
      .catch(err => res.status(400).json(err));
  },
  createPlayer(req, res) {
    console.log(req.body);
    Player.create(req.body)
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  },
  getPlayer(req, res) {
    Player.findById(req.params.id)
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  },
  updatePlayer(req, res) {
    const opts = {
      runValidators: true,
      new: true
    };
    Player.findByIdAndUpdate(req.params.id, req.body, opts)
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  },
  deletePlayer(req, res) {
    Player.findByIdAndDelete(req.params.id)
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  },
  updateStatus(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(player => res.json(player))
      .catch(err => res.status(400).json(err));
  }
};