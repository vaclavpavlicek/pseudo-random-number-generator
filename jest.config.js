// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
   "verbose": true,
    "transform": {
      "^.+\\.js$": "babel-jest"
    },
    "globals": {
      "NODE_ENV": "test"
    },
    "moduleFileExtensions": [
      "js"
    ],
    "moduleDirectories": [
      "node_modules"
    ]
};
