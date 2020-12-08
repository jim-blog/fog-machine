# React i18n
*React internationalization.*


## Extract JSON translations with `babel-plugin-i18next-extract`

```bash
$ npm install babel-plugin-i18next-extract
```

Create `.babelrc` file:
```bash
{
  "presets": ["@babel/preset-react"],
  "plugins": [
    ["i18next-extract", {"nsSeparator": "~"}],
    // […] your other plugins […]
  ]
}
```

Add *babel* script in `package.json`:
```json
"scripts": {
  "babel": "babel ./src/**/*.{js,jsx,ts,tsx}",
  "start": "nw-react-scripts start",
  "build": "nw-react-scripts build",
  "test": "nw-react-scripts test",
  "eject": "nw-react-scripts eject"
},
```

Run *babel* script (Webstorm Tools Alt+F11), translations are then in **extractedTranslations** folder.

## BabelEdit

* <a href="https://www.codeandweb.com/babeledithttps://www.codeandweb.com/babeledit" target="_blank">BabelEdit</a>
* <a href="https://github.com/gilbsgilbs/babel-plugin-i18next-extract" target="_blank">babel-plugin-i18next-extract</a>


## Resources

* <a href="https://react.i18next.com/guides/quick-start" target="_blank">react-i18next documentation > Quick start</a>
* <a href="https://react.i18next.com/latest/using-with-hooks" target="_blank">react-i18next documentation > Step by step guide</a>
* <a href="https://github.com/akameco/babel-plugin-react-intl-auto" target="_blank">babel-plugin-react-intl-auto</a>


## Author

**Jean-Michel _(Jim)_ FAURE** (November 20th, 2020)
* company: FAURE SYSTEMS®
* mail: *dev at faure dot systems*
* github: <a href="https://github.com/fauresystems" target="_blank">fauresystems</a>
* web: <a href="https://faure.systems/" target="_blank">Faure●Systems</a>