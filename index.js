var scope = {
	pdfbox : __dirname + "/bin/pdfbox-app-1.7.1.jar"
}

module.exports.PDFSplit = function(){
	require('./lib/PDFSplit').apply(scope, arguments)
};
