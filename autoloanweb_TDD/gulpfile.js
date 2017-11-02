
var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var karma = require('karma');
var minify = require('gulp-minify');
var gulpProtractorAngular = require('gulp-angular-protractor');
var selenium = require('selenium-standalone');
var karmaParseConfig = require('karma/lib/config').parseConfig;
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var minifyHtml = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var jshintreport = require('gulp-jshint-html-reporter');
var eslint   = require('gulp-eslint');
var reporter = require('eslint-html-reporter');
var fs       = require('fs');
var friendlyFormatter = require("eslint-friendly-formatter");
var sonar = require("gulp-sonar");

function runKarma(configFilePath, options, cb) {

  configFilePath = path.resolve(configFilePath);

  var server = karma.server;
  var log=gutil.log, colors=gutil.colors;
  var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function(key) {
      config[key] = options[key];
    });

  server.start(config, function(exitCode) {
    log('Karma has exited with ' + colors.red(exitCode));
    cb();
    process.exit(exitCode);
  });
}

gulp.task('clean', function() {
    return gulp.src('dist').pipe(clean());
});

gulp.task('lint', function() {
  return gulp.src(['app/gettinStarted/*.js',
    'app/loginDetails/*.js',
    'app/login/*.js',
    'app/newAccount/*.js',
    'app/newApplication/*.js',
    'app/utils/*.js',
    'app/app.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('gulp-checkstyle-jenkins-reporter'))
    .pipe(jshint.reporter('gulp-jshint-html-reporter', {
      filename: __dirname + '/codequality/index.html',
      createMissingFolders : true  
    }));
});
gulp.task('eslint', function() {
return gulp.src(['app/gettinStarted/*.js',
    'app/loginDetails/*.js',
    'app/login/*.js',
    'app/newAccount/*.js',
    'app/newApplication/*.js',
    'app/utils/*.js',
    'app/app.js'])
  .pipe(eslint({
    'rules':{
        'semi': [1, 'always']
    },
        envs: [
            'browser'
        ]
  }))
  .pipe(eslint.format(reporter, function(results) {
      fs.writeFileSync(path.join(__dirname, 'codequality.html'), results);
    }))
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});


gulp.task('compress', function() {
  gulp.src('app/**/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/app/'))
});

gulp.task('copy-assets-css', function() {
    gulp.src(['app/assets/**/*.*','app/assets/**/**/*.*'])
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/app/assets/'));
});

gulp.task('copy-loan-html', function() {
    gulp.src('app/loanDetails/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/app/loanDetails/'));
});

gulp.task('copy-gettingStarted-html', function() {
    gulp.src('app/gettingStarted/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/app/gettingStarted/'));
});

gulp.task('copy-login-html', function() {
    gulp.src('app/login/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/app/login/'));
});

gulp.task('copy-newAccount-html', function() {
    gulp.src('app/newAccount/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/app/newAccount/'));
});

gulp.task('copy-newApplication-html', function() {
    gulp.src('app/newApplication/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/app/newApplication/'));
});

gulp.task('moveBDDToDist', function(){
     gulp.src('BDD/*.*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/BDD'));
});

gulp.task('moveTDDToDist', function(){
     gulp.src('TDD/*.*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/TDD'));
});

gulp.task('moveBowerToDist', function(){
     gulp.src('bower_components/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('moveCoverageToDist', function(){
     gulp.src('coverage/*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist/coverage'));
});


gulp.task('moveOtherFiles', function(){
     gulp.src('*.*')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist'));
});


// Setting up the test task 
gulp.task('BDD', function(callback) {
    gulp.src(['BDD/features/*.feature'])
    .pipe(gulpProtractorAngular({
        'configFile': 'BDD/protractor.conf.js',
        'args': ['--baseUrl', 'http://52.205.27.23:8080/autoloan'],
        'autoStartStopServer': true,
        'debug': false
    }))
    .on('error', function(e) { throw e })
});


gulp.task('ATDD', function(cb) {
  runKarma('ATDDkarma.conf.js', {
    autoWatch: true,
    singleRun: false
  }, cb);
});

gulp.task('TDD', function(cb) {
  runKarma('karma.conf.js', {
    autoWatch: false,
    singleRun: true
  }, cb);
});

gulp.task('sonar', function () {
    var options = {
        sonar: {
            host: {
                url: 'http://sonar.cognizantagilelab.com:9000/'
            },
            jdbc: {
                url: 'jdbc:mysql://localhost:3306/sonar',
                username: 'sonar',
                password: 'sonar'
            },
            projectKey: 'App_Auto_Loan_Processing',
            projectName: 'App_Auto_Loan_Processing',
            projectVersion: '2.1.0-SNAPSHOT',
            // comma-delimited string of source directories 
            sources: 'app/login/.,app/newApplication/.,app/newAccount/.,app/loanDetails/.,app/gettingStarted/.',
            language: 'js',
            sourceEncoding: 'UTF-8',
            
            exec: {
                // All these properties will be send to the child_process.exec method (see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback ) 
                // Increase the amount of data allowed on stdout or stderr (if this value is exceeded then the child process is killed, and the gulp-sonar will fail). 
                maxBuffer : 1024*1024
            }
        }
    };
 
    // gulp source doesn't matter, all files are referenced in options object above 
    return gulp.src('thisFileDoesNotExist.js', { read: false })
        .pipe(sonar(options))
        .on('error', gutil.log);
});

/** continuous ... using karma to watch (feel free to circumvent that;) */
gulp.task('test-dev', function(cb) {
  runKarma('karma.conf.js', {
    autoWatch: true,
    singleRun: false
  }, cb);
});

gulp.task('autoloan', ['TDD', 'BDD']);

gulp.task('build', function(callback) {
    runSequence('clean', ['eslint', 'compress', 'copy-loan-html', 'copy-gettingStarted-html', 'copy-login-html', 'copy-newAccount-html', 'copy-newApplication-html','copy-assets-css','moveBDDToDist','moveTDDToDist','moveBowerToDist','moveCoverageToDist','moveOtherFiles','sonar'], callback);
});
