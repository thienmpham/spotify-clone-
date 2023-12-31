// Import required packages and libraries 
const SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
require('dotenv').config();

console.log(process.env.client_id);

// Defining the list of permissions from the Spotify API node 
const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

// credentials for Spotify API 
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.client_id, 
  clientSecret: process.env.client_secret, 
  redirectUri: 'http://127.0.0.1:5500/src/index.html'
});

// Creates an Express application
const app = express();

// Sets up a route for the /login endpoint 
app.get('/login', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

// Sets up a route for the /callback endpoint 
app.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

// Handle callback error 
  if (error) {
    console.error('Callback Error:', error);
    res.send('Callback Error: ${error}');
    return;
  };

  // Exchange the received authorization code
  // for access refresh tokens 
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      res.send('Sucess! You can close the window.');
    
    // Period token refresh mechanism 
      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      }, expires_in / 2 * 1000);
      })
      .catch(error => {
        console.error('Error getting Tokens:', error);
        res.send('Error getting Tokens: ${error}');
      });
});

// Starts the Express.js server on port 
app.listen(8888, () =>
  console.log(
    'HTTP Server up. Now go to http://localhost:8888/login in your browser.'
  )
);