const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true;
      frame: false;
    }
  })
  
  win.removeMenu()
  win.loadURL('https://modelsaber.com');
}

app.whenReady().then(createWindow)
