const {app, BrowserWindow} = require('electron')

    // Keep global reference of window object to foil garbage collection
    let win

    // Create browser window and load html
    function createWindow () {
        win = new BrowserWindow({width: 800, height: 600})
        win.loadFile('index.html')
        win.on('closed', () => {
            win = null
        })
    }

    app.on('ready', createWindow)

    // Leave app running when all windows are closed
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    // Create a new window if none are open and icon is activated
    app.on('activate', () => {
        if (win == null) {
            createWindow()
        }
    })

    /* Here include the rest of the app's specific main process code,
     * or put it in separate files and require them here.
     */


