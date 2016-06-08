var remapIstanbul = require('remap-istanbul');

var RemapReporter = function(helper, logger, config) {
  var log = logger.create('reporter.remap');
  var config = config || {};

  var inputFile = config.inputFile || 'coverage-final.json';
  var inputDir = config.inputDir || 'coverage/';
  var outputDir = config.outputDir || 'coverage-remapped/';

  this.onRunComplete = function(browsers, results) {
    browsers.forEach(function (browser) {

      log.info('Remapping coverage for ' + browser.name);
      remapIstanbul(inputDir + browser.name + '/' + inputFile, {
        'json': outputDir + browser.name + '/' + inputFile,
        'html': outputDir + browser.name + '/'
      });
    })
  };
};

RemapReporter.$inject = ['helper', 'logger','config.remapReporter'];

module.exports = {
  'reporter:remap': ['type', RemapReporter]
};
