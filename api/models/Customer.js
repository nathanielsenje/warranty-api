module.exports = {
  attributes: {
    id: {
      type: "number",
      required: true,
    },
    customer_id: {
      type: "string",
      required: true,
    },
    customer_name: {
      type: "string",
    },
    first_name: {
      type: "string",
      required: true,
    },
    last_name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      isEmail: true,
      unique: true,
      required: true,
    },
    mobile_number: {
      type: "string",
    },
    id_number: {
      type: "string",
    },
    created_at: {
      type: "string",
    },
    updated_at: {
      type: "string",
    },
  },
};
