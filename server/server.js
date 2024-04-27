var express = require("express");
var cors = require("cors");
const multer = require("multer");
const { get_stack } = require("./src/stackRetrieve");
const { get_logo_names } = require("./src/logosRetrieve");
const path = require('path');

var imageUrls = []
var stack = ""
var app = express();


// Multer configuration for multiple file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Destination directory for uploaded files
    },
});

const upload = multer({ storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware setup
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS for all routes

// Multer setup (for handling file uploads if needed)
var chatLog = " "



//  function to retrieve stack from prompt and send to user
async function sendStackToUser( prompt ){
    var ans = await get_stack(prompt)
    var response = ans[0]
    const chatRecord =  ans[1]

    urls = await get_logo_names(response)
    imageUrls = urls
    stack = response

    chatLog = chatRecord 

}

app.get('/api/images', (req, res) => {
  res.json(imageUrls);
});

app.get('/api/get-stack-suggestion', (req, res) => {
  console.log(stack)
  res.json({stack})
})

// POST endpoint to handle multiple file uploads

// API Routes
// API for getting prompt for stack suggestion from user
app.post('/api/post-suggest-stack', async (req, res) => {
  /* 
  Request Body:
  {
    "prompt": "....concept of user...."
  }
  */
  var prompt = req.body.prompt;
  console.log('Received prompt:', prompt);
  try {
    // Execute sendStackToUser asynchronously
    await sendStackToUser(prompt);

    // Respond to the client after sendStackToUser completes
    res.send("Received");
  } catch (error) {
    console.error('Error sending stack suggestion:', error);
    res.status(500).send('Error sending stack suggestion');
  }
});

// API for getting prompt for chat
app.post('/api/post-user-chat', (req, res) => {
  // Implement chat message handling
  // Example: const message = req.body.message;
});



// API for sending stack suggestion to user
;

// API for sending chat response to user
app.get('/api/get-model-response', (req, res) => {
  // Implement sending chat response to user
});

// API for clearing the chat history
app.post('/api/clear', (req, res) => {
  // Implement clearing chat history and context
});

// Dynamic route based on a POST request
app.post('/api/get-stack', (req, res) => {
  var vals = req.body;
  console.log('Received:', vals);
  res.send("Received");

  // Call `show()` function to set up a dynamic route
  show(vals);
});

// Function to set up a dynamic route
function show(val) {
  app.get(`/api/get-val`, (req, res) => {
    res.send(`Received dynamic value: ${val}`);
  });
}

// Start the server
const PORT = 9659;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
