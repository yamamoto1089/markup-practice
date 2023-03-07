var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var connectSSI = require("connect-ssi");

gulp.task("default", function () {
	browserSync.init({
		watchOptions: {
			ignoreInitial: true,
			ignored: ["**/*.+(jpg|jpeg|png|gif|svg)", "scss", "node_modules"],
		},
		middleware: [
			connectSSI({
				baseDir: "./",
				ext: ".html",
			}),
		],
		server: "./",
	});
});
