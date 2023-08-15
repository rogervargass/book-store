import publishers from '../models/Publisher.js'

class PublishersController {
  static listPublishers = async (req, res) => {
    try {
      const publishers_list = await publishers.find()
      res.status(200).json(publishers_list)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static listPublisherById = async (req, res) => {
    const id = req.params.id

    try {
      const publisher = await publishers.findById(id)
      res.status(200).json(publisher)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static registerPublisher = async (req, res) => {
    const publisher = new publishers(req.body)
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
      await publishers.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send('successfully updated publisher')
    } catch (err) {
      res.status(500).send({ message: `${err} - update failed` })
    }
  }

  static deletePublisher = async (req, res) => {
    const id = req.params.id
    try {
      await publishers.findByIdAndDelete(id)
      res.status(200).send('publisher deleted')
    } catch (err) {
      res.status(500).send({ message: `${err} - delete failed` })
    }
  }
}

export default PublishersController
