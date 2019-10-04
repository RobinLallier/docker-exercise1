const express = require('express');
const http = require('http');
const ip = require('ip');

const app = express();

app.get('/', (req, res)=> {

  console.log("Received a GET request on service2");
  let hostIpPort = req.client.remoteAddress + ":" + req.client.remotePort;

  const response2 = "Hello from " + hostIpPort + " to " + ip.address() + ":" + listener.address().port;
 
  res.send(response2);
})

let listener = app.listen(80, ()=> {
  console.log('app is running on port 80');
})
