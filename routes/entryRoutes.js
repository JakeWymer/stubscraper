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
}