const mongoose = require('mongoose');
const Entry = mongoose.model('entries');

module.exports = (app) => {
  app.get('/api/entries', async (req, res) => {
    const entries = await Entry.find();
    if (entries) {
			res.send(entries);
		} else {
			res.send(false);
    }
  });

  app.post('/api/entries', (req, res) => { 
    const entry = new Entry({ 
      name: req.body.name, 
      phoneNumber: req.body.phoneNumber, 
      email: req.body.email, 
      url: req.body.url, 
      priceMax: req.body.priceMax 
    });

    entry.save();
    res.send(entry);
  });

  app.put('/api/entries', (req, res) => {
    Entry.findByIdAndUpdate(  
      // the id of the item to find
      req.body._id,
  
      // the change to be made. Mongoose will smartly combine your existing 
      // document with this change, which allows for partial updates too
      req.body,
  
      // an option that asks mongoose to return the updated version 
      // of the document instead of the pre-updated one.
      {new: true},
  
      // the callback function
      (err, entry) => {
      // Handle any possible database errors
          if (err) return res.status(500).send(err);
          return res.send(entry);
      }
    );
  });

  app.delete('/api/entries/:_id', (req, res) => {
    Entry.findByIdAndRemove({'_id' : req.params._id}, function (err,offer){
      res.send('Deleted');
    });
  });
}