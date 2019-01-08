const electron = require('electron');

const { app, BrowserWindow } = electron; // Overall electron app process property

app.on('ready', () => {
  const mainWindow = new BrowserWindow({}); // Pass empty object with some configurations
  mainWindow.loadURL(`file://${__dirname}/index.html`); // ${__dirname} means current working directory
});
