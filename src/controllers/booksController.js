import Books from '../models/Book.js'

class BooksController {
  static listBooks = async (req, res) => {
    try {
      const booksList = await Books.find()
        .populate('author')
        .populate('publisher')
        .exec()
      res.status(200).json(booksList)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static listBookById = async (req, res) => {
    const id = req.params.id

    try {
      const book = await Books.findById(id)
        .populate('author', 'name')
        .populate('publisher', 'name')
        .exec()
      res.status(200).json(book)
    } catch (err) {
      res.status(400).json({ message: `${err} - id not found` })
    }
  }

  static listBookByPublisher = async (req, res) => {
    const publisher = req.query.publisher

    try {
      const book = await Books.find({ publisher })
      res.status(200).json(book)
    } catch (err) {
      res.status(400).json({ message: `${err} - publisher not found` })
    }
  }

  static registerBook = async (req, res) => {
    const book = new Books(req.body)
    try {
      await book.save()
      res.status(201).send(book.toJSON())
    } catch (err) {
      res.status(500).send({ message: `${err} - register failed` })
    }
  }

  static updateBook = async (req, res) => {
    const id = req.params.id
    try {
      await Books.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send('successfully updated book')
    } catch (err) {
      res.status(500).send({ message: `${err} - update failed` })
    }
  }

  static deleteBook = async (req, res) => {
    const id = req.params.id
    try {
      await Books.findByIdAndDelete(id)
      res.status(200).send('book deleted')
    } catch (err) {
      res.status(500).send({ message: `${err} - delete failed` })
    }
  }
}

export default BooksController
