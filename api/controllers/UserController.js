// api/controllers/UserController.js

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
      const warranty = await User.create({
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
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function (req, res) {
    try {
      const warranty = await User.findOne({ id: req.params.id });
      if (!warranty) {
        return res.notFound("User not found");
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
      const updatedUser = await User.updateOne({
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
      if (!updatedUser) {
        return res.notFound("User not found!");
      }
      return res.json(updatedUser);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function (req, res) {
    try {
      const deletedUser = await User.destroyOne({ id: req.params.id });
      if (!deletedUser) {
        return res.notFound("User not found");
      }
      return res.json({ message: "User deleted successfully!" });
    } catch (err) {
      return res.serverError(err);
    }
  },
};
