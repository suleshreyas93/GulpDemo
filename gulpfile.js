const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

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

 //Optimize Images
 gulp.task("imageMin",function(){
     gulp.src("src/images/*")
         .pipe(imagemin())
         .pipe(gulp.dest("dist/images"))
 });

 //Minify Js Files.
gulp.task("minifyJS",function(){
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
});
 