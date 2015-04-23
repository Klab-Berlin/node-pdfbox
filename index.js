var scope = {
	pdfbox : __dirname + "/bin/pdfbox-app-1.8.9.jar"
}

module.exports.PDFSplit = function(){
	return require('./lib/PDFSplit').apply(scope, arguments)
};

module.exports.PDFMerger = function(){
	return require('./lib/PDFMerger').apply(scope, arguments)
};
