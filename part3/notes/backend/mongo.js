const mongoose = require('mongoose')

/* connect to database */
if (process.argv.length < 3) {
  process.exit(1)
}
const password = process.argv[2]
const url = `mongodb+srv://zachleachutd:${password}@fullstackopen-part3.gvqr8fw.mongodb.net/?retryWrites=true&w=majority&appName=fullstackopen-part3`
mongoose.connect(url)

/* adding to database */
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is easy',
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
