const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron; // Overall electron app process property

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({}); // Pass empty object with some configurations
  mainWindow.loadURL(`file://${__dirname}/index.html`); // ${__dirname} means current working directory
});

ipcMain.on('path:send', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send(
      'duration:send',
      metadata.format.duration);
  })
});
