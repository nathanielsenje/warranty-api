module.exports = {
  attributes: {
    id: {
      type: "number",
      required: true,
    },
    user_id: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
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
    phone: {
      type: "string",
      required: true
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
