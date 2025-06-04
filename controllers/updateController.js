const Update = require('../models/Update');

exports.createUpdate = async (req, res) => {
  const { content } = req.body;
  try {
    const update = new Update({ user: req.user.id, content });
    await update.save();
    res.json(update);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getMyUpdates = async (req, res) => {
  try {
    const updates = await Update.find({ user: req.user.id }).sort({ date: -1 });
    res.json(updates);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
