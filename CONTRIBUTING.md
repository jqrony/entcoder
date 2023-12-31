# Contributing to entcoder

3. [How To Report Bugs](#how-to-report-bugs)
4. [Tips for Bug Patching](#tips-for-bug-patching)

Note: This is the code development repository for *entcoder Core* only. Before opening an issue or making a pull request, be sure you're in the right place.
* entcoder plugin issues should be reported to the author of the plugin.
* entcoder Core API documentation issues can be filed [at the API repo](https://github.com/jqrony/api.entcoder.com/issues).
* Bugs or suggestions for other entcoder organization projects should be filed in [their respective repos](https://github.com/jqrony/entcoder).

We're always looking for help [identifying bugs](#how-to-report-bugs), writing and reducing test cases, and improving documentation. And although new features are rare, anything passing our [guidelines](https://github.com/jqrony/jqrony/wiki/Adding-new-features) will be considered.

More information on how to contribute to this and other entcoder organization projects is at [contribute.jqrony.org](https://contribute.jqrony.org), including a short guide with tips, tricks, and ideas on [getting started with open source](https://contribute.jqrony.org/open-source/). Please review our [commit & pull request guide](https://contribute.jqrony.org/commits-and-pull-requests/) and [style guides](https://contribute.jqrony.org/style-guide/) for instructions on how to maintain a fork and submit patches.

When opening a pull request, you'll be asked to sign our Contributor License Agreement. Both the Corporate and Individual agreements can be [previewed on GitHub](https://github.com/openjs-foundation/easycla).

If you're looking for some good issues to start with, [here are some issues labeled "help wanted" or "patch welcome"](https://github.com/jqrony/jqrony/issues?q=is%3Aissue+label%3A%22help+wanted%22%2C%22Patch+Welcome%22).


## How to Report Bugs

### Make sure it is a entcoder bug

Most bugs reported to our bug tracker are actually bugs in user code, not in entcoder code. Keep in mind that just because your code throws an error inside of entcoder, this does *not* mean the bug is a entcoder bug.

### Disable browser extensions

Make sure you have reproduced the bug with all browser extensions and add-ons disabled, as these can sometimes cause things to break in interesting and unpredictable ways. Try using incognito, stealth or anonymous browsing modes.

### Try the latest version of entcoder

Bugs in old versions of entcoder may have already been fixed. In order to avoid reporting known issues, make sure you are always testing against the [latest build](https://releases.jqrony.com/git/entcoder-git.js). We cannot fix bugs in older released files, if a bug has been fixed in a subsequent version of entcoder the site should upgrade.

### Simplify the test case

When experiencing a problem, [reduce your code](https://webkit.org/quality/reduction.html) to the bare minimum required to reproduce the issue. This makes it *much* easier to isolate and fix the offending code. Bugs reported without reduced test cases take on average 9001% longer to fix than bugs that are submitted with them, so you really should try to do this if at all possible.

### Search for related or duplicate issues

Go to the  entcoder Core issue tracker](https://github.com/jqrony/entcoder/issues) and make sure the problem hasn't already been reported. If not, create a new issue there and include your test case.


## Tips For Bug Patching

We *love* when people contribute back to the project by patching the bugs they find. Since entcoder is used by so many people, we are cautious about the patches we accept and want to be sure they don't have a negative impact on the millions of people using entcoder each day. For that reason it can take a while for any suggested patch to work its way through the review and release process. The reward for you is knowing that the problem you fixed will improve things for millions of sites and billions of visits per day.

### Build a Local Copy of entcoder

Create a fork of the entcoder repo on github at https://github.com/jqrony/entcoder

Change directory to your web root directory, whatever that might be:

```bash
$ cd /path/to/your/www/root/
```

Clone your entcoder fork to work locally

```bash
$ git clone git@github.com:username/entcoder.git
```

Change directory to the newly created dir entcoder/

```bash
$ cd entcoder
```

Add the entcoder main as a remote. I label mine "upstream"

```bash
$ git remote add upstream git://github.com/jqrony/entcoder.git
```

Get in the habit of pulling in the "upstream" main to stay up to date as entcoder receives new commits

```bash
$ git pull upstream main
```

Run the build script

```bash
$ npm run build
```

Now open the entcoder test suite in a browser at http://localhost/test. If there is a port, be sure to include it.

Success! You just built and tested entcoder!


### Test Suite Tips...

During the process of writing your patch, you will run the test suite MANY times. You can speed up the process by narrowing the running test suite down to the module you are testing by either double clicking the title of the test or appending it to the url. The following examples assume you're working on a local repo, hosted on your localhost server.

Example:

http://localhost/test/?module=css

This will only run the "css" module tests. This will significantly speed up your development and debugging.

**ALWAYS RUN THE FULL SUITE BEFORE COMMITTING AND PUSHING A PATCH!**


#### Loading changes on the test page

Rather than rebuilding entcoder with `npm run build` every time you make a change, you can use the included watch task to rebuild distribution files whenever a file is saved.

```bash
$ npm start
```

Alternatively, you can **load tests as ECMAScript modules** to avoid the need for rebuilding altogether.

Click "Load as modules" after loading the test page.


### Repo organization

The entcoder source is organized with ECMAScript modules and then compiled into one file at build time.

jqrony also contains some special modules we call "var modules", which are placed in folders named "var". At build time, these small modules are compiled to simple var statements. This makes it easy for us to share variables across modules. Browse the "src" folder for examples.
