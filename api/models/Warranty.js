module.exports = {
  attributes: {
    id: {
      type: "number",
      required: true,
      autoIncrement: true
    },
    warranty_code: {
      type: "string",
      required: true,
    },
    customer_id: {
      type: "string",
      required: true,
    },
    invoice_date: {
      type: "string",
      required: true,
    },
    shop_name: {
      type: "string",
      required: true,
    },
    town: {
      type: "string",
    },
    product_bought: {
      type: "string",
    },
    quantity: {
      type: "number",
    },
    createdAt: {
      type: "string",
      autoCreatedAt: true,
    },
    updatedAt: {
      type: "string",
      autoUpdatedAt: true
    },
  },
};
