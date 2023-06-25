const express = require('express');
const cors = require('cors');

const server = express();

// Enable CORS for all routes
server.use(cors());

// Define your Next.js handler
const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Next.js request handler
app.prepare().then(() => {
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
