module.exports = {
  attributes: {
    id: {
      type: "number",
      required: true,
    },
    warranty_code: {
      type: "string",
      required: true,
    },
    customer_id: {
      type: "string",
    },
    invoice_number: {
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
    created_at: {
      type: "string",
    },
    updated_at: {
      type: "string",
    },
  },
};
