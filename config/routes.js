/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "/": { view: "pages/homepage" },

  // Customer Routes
  "GET /customers": "CustomerController.find",
  "GET /customers/:id": "CustomerController.findOne",
  "POST /customers": "CustomerController.create",
  "PUT /customers/:id": "CustomerController.update",
  "DELETE /customers/:id": "CustomerController.destroy",

  // Warranty Routes
  "GET /warranty": "WarrantyContoller.find",
  "GET /warranty/:id": "WarrantyContoller.findOne",
  "POST /warranty": "WarrantyContoller.create",
  "PUT /warranty/:id": "WarrantyContoller.update",
  "DELETE /warranty/:id": "WarrantyContoller.destroy",

  // Warranty Routes
  "GET /claim": "ClaimController.find",
  "GET /claim/:id": "ClaimController.findOne",
  "POST /claim": "ClaimController.create",
  "PUT /claim/:id": "ClaimController.update",
  "DELETE /claim/:id": "ClaimController.destroy",
};
