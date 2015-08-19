# CM_JavaScript-Exercise_5_and_6
CM Coding Exercise Submission folder - JavaScript Requirements[5-6]
<snippet>
  <content>
# Project Name:  Prefix, Suffix and StripHTML

* startsWith(string) ­ This should take a single argument and return true if the provided string is a prefix
of this.
* endsWith(string) ­ This should take a single argument and return true if the provided string is a suffix of this.
* stripHtml() ­ This method should remove all html/xml tags from this.

## Environment
1. Mac OX S 10.10.5
2. WebStorm 9.0.3

## Dependencies (for testing)
- "jasmine-core": "^2.3.4",
- "karma": "^0.13.8",
- "karma-chrome-launcher": "^0.2.0",
- "karma-cli": "^0.1.0",
- "karma-firefox-launcher": "^0.1.6",
- "karma-jasmine": "^0.3.6"

## Usage
1. Dowload this 'ZIP' source code, extract the ZIP file to your local trusted path
2. Open your WebStorm 9
3. Open project: 'FILE -> OPEN -> *path to project* '
4. Start to run

## Test
1. Before test, it needs to install `karma` and `karma-cli` packages if you've already installed `node.js`, if not, you'd better install `node.js` and `npm` package firstly, and here is a useful tutorial with good samples [Getting Started with Testing JavaScript in WebStorm](https://www.youtube.com/watch?v=QQSySPpzmPI)
2. Simple steps for karma configuration in your project
 1. Initialize test project `npm init`, this will create a `pacakge.json` file contains your project info, can be edited. 
 2. Create `karma.conf.js`, with commond `node_modules/.bin/karma init`, (`node_modules` folder was generated as soon as `karma` was installed)
  * open `karma.conf.js`, add the test/ tobe tested file reference to `list of files/ patterns to load in the browser`, such as `‘js/*.js’, ‘tests/*.js’
`, karma will read these files during testing
 3. Open `Edit Configurations` window, add `+` a new karma debug/ run configuration, name it as `Karma Testing`, add the path of `karma.conf.js` to `Configuration file`, apply&save it
3. Create tests folder and save your test files in `tests` folder
4. `Run 'Karma Testing'`, there should 9 tests be passed 

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

</content>
  <tabTrigger>readme</tabTrigger>
</snippet>
