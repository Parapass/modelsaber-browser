const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
    win.setMenu(null);
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
