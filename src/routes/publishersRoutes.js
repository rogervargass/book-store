import express from 'express'
import PublishersController from '../controllers/publishersController.js'

const router = express.Router()

router
  .get('/publishers', PublishersController.listPublishers)
  .get('/publishers/:id', PublishersController.listPublisherById)
  .post('/publishers', PublishersController.registerPublisher)
  .put('/publishers/:id', PublishersController.updatePublisher)
  .delete('/publishers/:id', PublishersController.deletePublisher)

export default router
