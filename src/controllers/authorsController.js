import authors from '../models/Author.js'

class AuthorsController {
  static listAuthors = async (req, res) => {
    try {
      const authorsResult = await authors.find()
      res.status(200).json(authorsResult)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static listAuthorById = async (req, res) => {
    const id = req.params.id

    try {
      const author = await authors.findById(id)
      res.status(200).json(author)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static registerAuthor = async (req, res) => {
    const author = new authors(req.body)
    try {
      await author.save()
      res.status(201).send(author.toJSON())
    } catch (err) {
      res.status(500).send({ message: `${err} - register failed` })
    }
  }

  static updateAuthor = async (req, res) => {
    const id = req.params.id
    try {
      await authors.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send('successfully updated author')
    } catch (err) {
      res.status(500).send({ message: `${err} - update failed` })
    }
  }

  static deleteAuthor = async (req, res) => {
    const id = req.params.id
    try {
      await authors.findByIdAndDelete(id)
      res.status(200).send('author deleted')
    } catch (err) {
      res.status(500).send({ message: `${err} - delete failed` })
    }
  }
}

export default AuthorsController
