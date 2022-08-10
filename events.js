// Event-driven architecture - Observed pattern

const EventEmitter = require('events');
const server = require('http').createServer();

// Best pratices: inherits EventEmitter if wanna creates events
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There were a new sale');
});

myEmitter.on('newSale', () => {
  console.log('new Customer: Alexandre node hero');
});

myEmitter.on('newSale', (stock) => {
  console.log(`The consumer gain ${stock} in stock`);
});
myEmitter.emit('newSale', 9);

// Server events

server.on('request', (req, res) => {
  console.log('Request receaved');
  res.end('Request received!');
});

server.on('request', (req, res) => {
  // console.log('Another event');
  console.log('Another event received');
});

server.on('close', () => {
  console.log('Server was closed');
});
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
