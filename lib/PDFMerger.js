var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);

module.exports = function(files, outputFile) {
  console.log("OUTPUT FILE: " + outputFile)

	var command = [
		'java',
		'-jar',
		this.pdfbox,
		'PDFMerger',
	].concat(files)

  command.push(outputFile)

  console.log(command.join(' '))

	return exec(command.join(' '));
}
