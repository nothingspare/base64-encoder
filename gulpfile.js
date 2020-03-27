const gulp = require('gulp');
const _ = require('lodash');
const yaml = require('js-yaml');
const fs = require('fs');
const moment = require('moment');
const PDFDocument = require('pdfkit');
const MemoryStream = require('memorystream');
const conv = require('binstring');
const btoa = require('btoa');
const argv = require('yargs').argv;

gulp.task('encode', () => {
	let input = argv.consume || argv.c || 'input.pdf';
	let output = argv.output || argv.o || 'output.base64';
	let file = fs.readFileSync('./' + input, 'base64');
	fs.writeFileSync('./' + output, file);
	console.log(file);
	//console.log(encoded);
});
