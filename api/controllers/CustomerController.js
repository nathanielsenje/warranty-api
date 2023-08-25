// api/controllers/CustomerController.js

module.exports = {
  create: async function (req, res) {
    try {
      const { firstName, lastName, email, phoneNumber } = req.body;
      const customer = await Customer.create({
        firstName,
        lastName,
        email,
        phoneNumber,
      }).fetch();
      return res.json(customer);
    } catch (err) {
      return res.serverError(err);
    }
  },

  find: async function (req, res) {
    try {
      const customers = await Customer.find();
      return res.json(customers);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function (req, res) {
    try {
      const customer = await Customer.findOne({ id: req.params.id });
      if (!customer) {
        return res.notFound("Customer not found");
      }
      return res.json(customer);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function (req, res) {
    try {
      const { firstName, lastName, email, phoneNumber } = req.body;
      const updatedCustomer = await Customer.updateOne({
        id: req.params.id,
      }).set({ firstName, lastName, email, phoneNumber });
      if (!updatedCustomer) {
        return res.notFound("Customer not found");
      }
      return res.json(updatedCustomer);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function (req, res) {
    try {
      const deletedCustomer = await Customer.destroyOne({ id: req.params.id });
      if (!deletedCustomer) {
        return res.notFound("Customer not found");
      }
      return res.json({ message: "Customer deleted successfully" });
    } catch (err) {
      return res.serverError(err);
    }
  },
};
