const { Service: ServiceModel, serviceSchema } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      //toda req ten yn body onde ficão os dados
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Created Service!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();

      res.status(200).json(services);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      //quando lidamos com o get, resgatamos o ID na URL
      //por isso usamos params, até pq o ID não fica no body

      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: "Service not found!!" });
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const service = ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: "Service not found!!" });
        return;
      }

      const deletedService = await ServiceModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ msg: `The service was succesfully deleted!`, deletedService });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const updatedService = ServiceModel.findByIdAndUpdate(id, service);

      if (!updatedService) {
        res.status(404).json({ msg: "Service not found!!" });
        return;
      }

      res.status(200).json({ service , msg: "Updated service!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = serviceController;
