const jsonImporter = require('node-sass-json-importer');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          importer: jsonImporter(),
        }
      }
    }
  }
};
