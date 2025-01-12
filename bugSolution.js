const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors gracefully.
//  Listen for the 'error' event on the server object.
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Using a Promise to handle asynchronous operations and better error handling
const startServer = () => {
  return new Promise((resolve, reject) => {
    server.listen(8080, () => {
      console.log('Server is running on port 8080');
      resolve();
    });
  });
};

startServer().catch(err => console.error("Failed to start server:", err));
