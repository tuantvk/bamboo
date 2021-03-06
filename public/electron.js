const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1150,
    minHeight: 850,
    fullscreenable: true,
  });
  mainWindow.maximize();
  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : `file://${path.join(__dirname,
      "../build/index.html")}`
  );
  mainWindow.webContents.on("new-window", function (event, url) {
    event.preventDefault();
    electron.shell.openExternal(url);
  });
  mainWindow.on("closed", () => (mainWindow = null));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});