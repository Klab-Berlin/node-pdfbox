var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);

module.exports = function(files, outputFile) {

	var command = [
		'java',
		'-jar',
		this.pdfbox,
		'PDFMerger',
	].concat(files.map(function (file) { return "'" + file + "'"}))

  command.push("'" + outputFile + "'")

	return exec(command.join(' '));
}
