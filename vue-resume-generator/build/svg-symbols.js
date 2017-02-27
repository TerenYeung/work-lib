const path = require('path')
const fs = require('fs')


/*

raw data => dist data 
		regexp
 */
//read data
let svgFolder = path.join(__dirname,'../static/svg_icons/')

let svgFiles = fs.readdirSync(svgFolder)
// console.log(svgFiles)
let symbols = svgFiles.map(function(filename){
	let absolutePath = path.join(svgFolder,filename)
	let fileContent = fs.readFileSync(absolutePath).toString('utf-8')
	// console.log(fileContent)
	let name = path.basename(filename,'.svg')
	// console.log(name)
	return fileContent
		.replace(/<?.+\?>/g,'')
		.replace(/<!.+?>/g,'')
		.replace(/version=".+?"/g,'')
		.replace(/xmlns=".+?"/g,'')
		.replace(/class=".+?"/g,'')
		.replace(/fill=".+?"/g,'')
		.replace(/stroke=".+?"/g,'')
		.replace(/<svg/,`<svg id="icon-${name}"`)
		.replace(/\bsvg\b/g,'symbol')
		.replace(/\s{2,}/g,' ')
}).join('\n')
//console.log(symbols)

let jsPath = path.join(__dirname,'../src/assets/icon.js')
let js = `export default \`<svg style="display:none">\n${symbols}\n</svg>\`\n`

//write data
fs.writeFileSync(jsPath,js,{flag:'w'})