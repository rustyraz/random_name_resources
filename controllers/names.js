//we shall have multiple methods that will be exported

// VALIDATION OF THE REQ BODY IS PENDING AND THE PARAMS TOO

const Name = require('../models/name');

module.exports = {
  newName: async (req, res, next) => {
    //we will process the posted name here
    const name = new Name({
      name: req.body.name
    });
    await name.save();
    res.status(200).json(name);
  },

  getName: async (req, res, next) => {
    //we will get the name from the db using an ID
    const name = await Name.findById(req.params.nameId);
    res.status(200).json(name);
  },

  updateName: async (req, res, next) => {
    //we will update the name
    const { nameId } = req.params;
    const newName = { name: req.body.name };
    const result = await Name.findByIdAndUpdate(nameId, newName);
    res.status(200).json({ success: true });
  },

  deleteName: async (req, res, next) => {
    //we will delete the name
    const name = await Name.findById(req.params.nameId);
    if(!name){
      return res.status(404).json({ error: "Name does not exist" });
    }
    await name.remove();
    res.status(200).json('Name deleted successfully!')
  },

  listNames: async (req, res, next) => {
    //we will get the list of names
    const names = await Name.find({});
    res.status(200).json(names);
  },

}
