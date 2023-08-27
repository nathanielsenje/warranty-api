// api/controllers/CustomerController.js

module.exports = {
  create: async function (req, res) {
    try {
      const {
        warranty_code,
        customer_id,
        invoice_number,
        invoice_date,
        shop_name,
        town,
        product_bought,
        quantity,
        created_at,
        updated_at,
      } = req.body;
      const warranty = await Warranty.create({
        warranty_code,
        customer_id,
        invoice_number,
        invoice_date,
        shop_name,
        town,
        product_bought,
        quantity,
        created_at,
        updated_at,
      }).fetch();
      return res.json(warranty);
    } catch (err) {
      return res.serverError(err);
    }
  },

  find: async function (req, res) {
    try {
      const customers = await Warranty.find();
      return res.json(customers);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function (req, res) {
    try {
      const warranty = await Warranty.findOne({ id: req.params.id });
      if (!warranty) {
        return res.notFound("Warranty not found");
      }
      return res.json(warranty);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function (req, res) {
    try {
      const {
        warranty_code,
        customer_id,
        invoice_number,
        invoice_date,
        shop_name,
        town,
        product_bought,
        quantity,
        created_at,
        updated_at,
      } = req.body;
      const updatedCustomer = await Warranty.updateOne({
        id: req.params.id,
      }).set({
        warranty_code,
        customer_id,
        invoice_number,
        invoice_date,
        shop_name,
        town,
        product_bought,
        quantity,
        created_at,
        updated_at,
      });
      if (!updatedCustomer) {
        return res.notFound("Warranty not found!");
      }
      return res.json(updatedCustomer);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function (req, res) {
    try {
      const deletedCustomer = await Warranty.destroyOne({ id: req.params.id });
      if (!deletedCustomer) {
        return res.notFound("Warranty not found");
      }
      return res.json({ message: "Warranty deleted successfully!" });
    } catch (err) {
      return res.serverError(err);
    }
  },
};
