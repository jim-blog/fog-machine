# NW.js React app
*Create NW.js React apps with no build configuration.*


## Creating an App
1. open `Node.js command prompt` and navigate to project foder (where to create the app folder)
2. run `npm init nw-react-app fog-controller`

```python
D:\GitHub\blog\escape-room\fog_machine>npm init nw-react-app fog-controller
npx: installed 97 in 5.039s

Creating a new NW.js React app in D:\GitHub\blog\escape-room\fog_machine\fog-controller.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and nw-react-scripts with cnra-template...


> core-js@2.6.11 postinstall D:\GitHub\blog\escape-room\fog_machine\fog-controller\node_modules\babel-runtime\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js@3.7.0 postinstall D:\GitHub\blog\escape-room\fog_machine\fog-controller\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.7.0 postinstall D:\GitHub\blog\escape-room\fog_machine\fog-controller\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

+ nw-react-scripts@3.4.1
+ cnra-template@1.0.3
+ react-dom@17.0.1
+ react@17.0.1
added 1752 packages from 793 contributors and audited 1756 packages in 151.404s

78 packages are looking for funding
  run `npm fund` for details

found 4 vulnerabilities (2 low, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details

Initialized a git repository.

Installing template dependencies using npm...
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @testing-library/jest-dom@4.2.4
+ @testing-library/react@9.5.0
+ @testing-library/user-event@7.2.1
added 36 packages from 56 contributors and audited 1792 packages in 12.474s

78 packages are looking for funding
  run `npm fund` for details

found 4 vulnerabilities (2 low, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details
Removing template package using npm...

npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

removed 1 package and audited 1791 packages in 6.294s

78 packages are looking for funding
  run `npm fund` for details

found 4 vulnerabilities (2 low, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details

Created git commit.

Success! Created fog-controller at D:\GitHub\blog\escape-room\fog_machine\fog-controller
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd fog-controller
  npm start

Happy hacking!

```

> Git stuff are created in the app folder (`.git` and `.gitignore`).

### `npm start`

Runs the app in development mode.
Open to see your app or http://localhost:3000 to view it in the browser.

### `npm test`

Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.


## Creating WebStorm project
1. open WenStorm
2. create a **Node.js** project in the existing folder (confirm to create frome xistinhg sources).

### `npm start` configuration

Create an **npm** configuration with argument `start` (default proposed is `run` so scroll down to `start`)

Run `npm start` in debug mode, the firt start takes time because il will download a lot of stuff...

```python
Debugger listening on ws://127.0.0.1:52281/2c8b9f08-1d2a-4089-8453-f44153221018
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
Debugger listening on ws://127.0.0.1:52284/0e36bad1-4a1b-4c59-bb6d-53ffd3403087
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
i ｢wds｣: Project is running at http://192.168.1.53/
i ｢wds｣: webpack output is served from
i ｢wds｣: Content not from webpack is served from D:\GitHub\blog\escape-room\fog_machine\fog-controller\public
i ｢wds｣: 404s will fallback to /
Starting the development server...
Compiled successfully!

You can now view fog-controller in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.53:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

  downloading [==------------------] 9% 607.3s
  
```

> When download is fichished the NW.js window is opened with the app view, you don't have to open i your browser (that doesn't work anyway).


## Resources

* <a href="https://github.com/naviapps/create-nw-react-app" target="_blank">Create NW.js React App</a>
* <a href="https://medium.com/@matteofumagalli1275/setting-up-nw-js-react-materialui-from-scratch-5a83c3f58355" target="_blank">Setting up NW.JS + React + MaterialUI From Scratch</a>


## Author

**Jean-Michel _(Jim)_ FAURE** (November 20th, 2020)
* company: FAURE SYSTEMS®
* mail: *dev at faure dot systems*
* github: <a href="https://github.com/fauresystems" target="_blank">fauresystems</a>
* web: <a href="https://faure.systems/" target="_blank">Faure●Systems</a>