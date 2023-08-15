import express from "express";
import AuthorsController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/authors", AuthorsController.listAuthors)
  .get("/authors/:id", AuthorsController.listAuthorById)
  .post("/authors", AuthorsController.registerAuthor)
  .put("/authors/:id", AuthorsController.updateAuthor)
  .delete("/authors/:id", AuthorsController.deleteAuthor);

export default router;
