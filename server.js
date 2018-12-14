const proxy = require('redbird')({
  port: 80
});

proxy.register('178.238.237.142', 'http://localhost:3000')
