import Publishers from '../models/Publisher.js'

class PublishersController {
  static listPublishers = async (req, res) => {
    try {
      const publishersList = await Publishers.find()
      res.status(200).json(publishersList)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static listPublisherById = async (req, res) => {
    const id = req.params.id

    try {
      const publisher = await Publishers.findById(id)
      res.status(200).json(publisher)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static registerPublisher = async (req, res) => {
    const publisher = new Publishers(req.body)
    try {
      await publisher.save()
      res.status(201).send(publisher.toJSON())
    } catch (err) {
      res.status(500).send({ message: `${err} - register failed` })
    }
  }

  static updatePublisher = async (req, res) => {
    const id = req.params.id
    try {
      await Publishers.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send('successfully updated publisher')
    } catch (err) {
      res.status(500).send({ message: `${err} - update failed` })
    }
  }

  static deletePublisher = async (req, res) => {
    const id = req.params.id
    try {
      await Publishers.findByIdAndDelete(id)
      res.status(200).send('publisher deleted')
    } catch (err) {
      res.status(500).send({ message: `${err} - delete failed` })
    }
  }
}

export default PublishersController
