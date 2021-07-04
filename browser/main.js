const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true;
      frame: false
    }
  })
  
  win.removeMenu()
  win.loadURL('https://modelsaber.com');
}

app.whenReady().then(createWindow)
