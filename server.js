let express= require ("express");
let app= express();
let bodyParser= require('body-parser')

// Serve static HTML file
    app.get('/', function(req,res){
        res.sendFile( '/index.html')
    })

// Initialize empty array for books
   let books=[];

// Get all books
    app.get('/books', function(req,res){
        res.json(books)
    })
// Add a book
    app.use(bodyParser.json())
    app.post('/books', function(req,res){
       let jsonData= req.body;
       let jsonString= JSON.stringify(jesonData);
       res.send(jsonString)

// // Generate unique ID for the book
    const id = Math.floor(Math.random() * 1000000)
// // Add book to the collection
     books.push({ id, title, author, publishedDate })
//         // Send response with new book object
        res.json({ id, title, author, publishedDate })
    })
// Delete a book by ID
app.delete('/books/:id', function (req, res)  {
    const { id } = req.params

    // Find index of book with specified ID
    const index = books.findIndex(book => book.id == id)

    if (index === -1) {
        // Book not found
        res.status(404).json({ message: 'Book not found' })
    } else {
        // Remove book from collection
        books.splice(index, 1)

        // Send response with success message
        res.json({ message: 'Book successfully deleted' })
    }
})

app.listen(3000,function (){
    console.log("book-collection run success")
})