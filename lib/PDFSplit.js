var exec = require('child_process').exec;

module.exports = function(data, callback){
	
	var command = [
		'java',
		'-jar',
		this.pdfbox,
		'PDFSplit',
		data.file
	];

	exec(command.join(' '), function (err, stdout, stderr) {
		if (callback) {
			callback(err, stdout, stderr);
		} 
		else {
			if (err) throw new Error(err);
		}
	});
}