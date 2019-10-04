const express = require('express');
const request = require('request');
const http = require('http');
const ip = require('ip');

const app = express();

app.get('/', (req, res)=> {

  console.log("Received a GET request on service1");
  let hostIpPort = req.client.remoteAddress + ":" + req.client.remotePort;
  
  const response1 = "Hello from " + hostIpPort + " to " + ip.address() + ":" + listener.address().port;

  request(
    {
      uri: "http://service2:80/", 
      json: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }, 
    function (error, response, body) {
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      const response2 = body;
      const finalResponse = [ response1, response2];
      res.send(finalResponse);
    }
  );
})

let listener = app.listen(80, ()=> {
  console.log('app is running on port 80');
})
