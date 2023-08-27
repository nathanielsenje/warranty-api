module.exports = {
  attributes: {
    id: {
      type: "number",
      autoIncrement: true
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
