const Update = require('../models/Update');

exports.getAllUpdates = async (req, res) => {
  try {
    const updates = await Update.find().populate('user', 'username').sort({ date: -1 });
    res.json(updates);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.editUpdate = async (req, res) => {
  try {
    const update = await Update.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!update) return res.status(404).json({ msg: 'Update not found' });
    res.json(update);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteUpdate = async (req, res) => {
  try {
    const update = await Update.findByIdAndDelete(req.params.id);
    if (!update) return res.status(404).json({ msg: 'Update not found' });
    res.json({ msg: 'Update deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
