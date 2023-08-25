module.exports = {
  attributes: {
    id: {
      type: "number",
      required: true,
    },
    claim_id: {
      type: "string",
    },
    warranty_code: {
      type: "string",
      required: true,
    },
    claim_type: {
      type: "string",
      required: true,
    },
    claim_description: {
      type: "string",
    },
    claim_status: {
      type: "string",
      required: true,
    },
    created_at: {
      type: "string",
    },
    updated_at: {
      type: "string",
    },
  },
};
