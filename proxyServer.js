const express = require('express');
const axios = require('axios');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 5000;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://www.metaweather.com/api/';

const instance = axios.create({
  // I have 301 and CORS issues with location's weather data api so I use CORS anywhere of heroku to bypass it
  baseURL: API_SERVICE_URL,
});

instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

// Info GET endpoint
app.get('/location/:id', async (req, res, next) => {
  const id = req.params.id;
  const data = await instance.get(`location/${id}`);

  res.send(data);
});

// Proxy endpoints
app.use('/location/search', createProxyMiddleware({
  target: `${API_SERVICE_URL}location/search`,
  changeOrigin: true,
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});