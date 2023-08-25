// api/controllers/ClaimController.js

module.exports = {
  create: async function (req, res) {
    try {
      const {
        claim_id,
        warranty_code,
        claim_type,
        claim_description,
        claim_status,
        created_at,
        updated_at,
      } = req.body;
      const claim = await Claim.create({
        claim_id,
        warranty_code,
        claim_type,
        claim_description,
        claim_status,
        created_at,
        updated_at,
      }).fetch();
      return res.json(claim);
    } catch (err) {
      return res.serverError(err);
    }
  },

  find: async function (req, res) {
    try {
      const claims = await Claim.find();
      return res.json(claims);
    } catch (err) {
      return res.serverError(err);
    }
  },

  findOne: async function (req, res) {
    try {
      const claim = await Claim.findOne({ id: req.params.id });
      if (!claim) {
        return res.notFound("Claim not found");
      }
      return res.json(claim);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function (req, res) {
    try {
      const {
        claim_id,
        warranty_code,
        claim_type,
        claim_description,
        claim_status,
        created_at,
        updated_at,
      } = req.body;
      const updatedClaim = await Claim.updateOne({
        id: req.params.id,
      }).set({
        claim_id,
        warranty_code,
        claim_type,
        claim_description,
        claim_status,
        created_at,
        updated_at,
      });
      if (!updatedClaim) {
        return res.notFound("Claim not found");
      }
      return res.json(updatedClaim);
    } catch (err) {
      return res.serverError(err);
    }
  },

  destroy: async function (req, res) {
    try {
      const deletedClaim = await Claim.destroyOne({ id: req.params.id });
      if (!deletedClaim) {
        return res.notFound("Claim not found");
      }
      return res.json({ message: "Claim deleted successfully" });
    } catch (err) {
      return res.serverError(err);
    }
  },
};
