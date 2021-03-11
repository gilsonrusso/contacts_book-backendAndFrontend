const Router = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");
const contactRoutes = require("./controllers/contactsControllers");

const routes = Router();

routes.get("/api/v1/contacts", contactRoutes.index);
routes.post(
  "/api/v1/contacts",
  multer(multerConfig).single("file"),
  contactRoutes.create
);
routes.get("/api/v1/contacts/:id", contactRoutes.show);
routes.put("/api/v1/contacts/:id", contactRoutes.update);
routes.delete("/api/v1/contacts/:id", contactRoutes.delete);

// route to upload
// routes.post(
//   "/api/v1/contacts/upload",
//   multer(multerConfig).single("file"),
//   contactRoutes.upload
// );

module.exports = routes;
