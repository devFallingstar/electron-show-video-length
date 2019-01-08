const electron = require('electron');

const { app } = electron; // Overall electron app process property

app.on('ready', () => {
  console.log('App is now ready');
});
