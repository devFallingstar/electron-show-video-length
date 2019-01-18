const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron; // Overall electron app process property

app.on('ready', () => {
  const mainWindow = new BrowserWindow({}); // Pass empty object with some configurations
  mainWindow.loadURL(`file://${__dirname}/index.html`); // ${__dirname} means current working directory
});

ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log('Video duration is: ', metadata.format.duration);
  })
});
