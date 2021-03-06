var pollModel = require('../models/poll');

module.exports.get = function(req, res){
  console.log('Getting poll');
  pollModel.findOne(query, function(err, results){
    if(!err){
      res.status(200).json(res);
    } else {
      res.status(500).json(err);
    }
  })
}

module.exports.post = function(req, res){
  console.log('Posting poll', req.body);
  var newPoll = new pollModel(req.body);
  newPoll.save(function(err, response){
    if(!err){
      res.status(200).json(response);
    } else {
      res.status(500).json(err);
    }
  })
}