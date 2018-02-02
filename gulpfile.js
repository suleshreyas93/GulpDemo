const gulp = require("gulp");

/**
 * TOP LEVEL FUNCTIONS
 * gulp.task :- Define tasks to perform
 * gulp.src :- Point to files to use
 * gulp.dest :- Point to folders to output which will contain the compiled or minified versions of file to be used in production.
 * gulp.watch :- Watch files and folders for changes.
 */

 //Logs message
 gulp.task("message",function(){
     return console.log("Gulp is running...");
 });

 gulp.task("default",function(){
     return console.log("Gulp is running...");
 });

 //Copy Html Files
 gulp.task("copyHtml",function(){
     gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
 });