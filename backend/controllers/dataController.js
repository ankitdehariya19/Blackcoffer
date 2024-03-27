
const data = require('../models/data');

const dataController = {
  getAlldatas: async (req, res, next) => {
    try {
      const datas = await data.find();
      res.status(200).json(datas);
    } catch (error) {
      next(error); 
    }
  },

  createdata: async (req, res, next) => {
    try {
      const newdata = await data.create(req.body);
      res.status(201).json(newdata);
    } catch (error) {
      next(error);
    }
  },

  getdataById: async (req, res, next) => {
    try {
      const data = await data.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ message: 'data not found' });
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = dataController;
