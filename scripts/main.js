const router = require("cmdrouter");
const browserify = require("browserify");
const path = require("path");
const fs = require("fs-extra");
const exorcist = require("exorcist");

var baseDir = path.resolve(__dirname, "../");

var distDir = path.resolve(baseDir, "dist/");


router({build, watch}).route();


function clean(){
	if (distDir.endsWith("dist")){
		fs.removeSync(distDir);	
	}
	
	fs.mkdirSync(distDir);

}

function build(){
	clean();

	var distFile = path.join(distDir, "gtx.js");
	var mapFile = distFile + ".map";	

	var b = browserify(path.join(baseDir,"index-global.js"),{ 
		entry: true, 
		debug: true  
	});
		
	b.bundle()
		.on("error", function (err) { console.error(err); })
		.pipe(exorcist(mapFile))
		.pipe(fs.createWriteStream(distFile));	

}


function watch(){
	// TODO: should wait until done (But still work)
	build();

	fs.watch(path.join(baseDir, "index.js"), (type, filename) => {
		console.log("File changed: " + filename);
		console.log("rebuilding dist");
		build();
	});
}




