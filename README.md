# An example project using React, Redux & React Router
This is a project that's been developed based on the React/Redux pluralsight course.
It's not a complete project i.e. add project/save project don't currently work as intended and it currently uses a Mock API that simulates a back-end project.

The project uses a Golang web server developed using the Gin Web Framework.

## Prerequisites 
There are a couple of things that need to be installed prior to running the project:

|Golang|dep|Yarn|Node.js|
|------|---|----|----|
|brew install go|brew install dep|brew install yarn|brew install node|
|For developing in Golang|For managing go dependencies|To manage JavaScript Dependencies|JavaScript Runtime|


## Running the project

As this project utilises Go it must be run within the GOPATH. After pulling/cloning this project move it here, when you move the project ensure you copy everything including the invisible files `.babelrc` and `.eslintrc`, I believe you can do this with `cp -r start_dir target_dir`:
```bash
$HOME/go/src/
```
Then open a terminal at the location of this directory (`i.e. $HOME/go/src/example-project`) and run the following commands to install all dependencies:
```bash
yarn install-all
```

This yarn command runs both `yarn server-install` which uses dep to install all back-end Go dependencies and `yarn install` which uses yarn and NPM scripts to install all front-end JavaScript Dependencies.

Once all the dependencies are installed you can either run the following:
```bash
yarn dev
```
This runs `yarn server-run` which, as the name suggests, runs the server and will automatically update the any static file changes and `yarn client-watch`, which bundles the client code using webpack/babel and watches the source code so it will re-compile on change.

All of these yarn scripts have been created in package.json, for more information about what they do take a look in that file under the `scripts` attribute.

## Glossary

* [Golang](https://golang.org/) - The Go programming language
* [dep](https://golang.github.io/dep/) - Dependency management for Go
* [Gin](https://github.com/gin-gonic/gin) - HTTP web framework written in Go
* [Node.js](https://nodejs.org) - A JavaScript runtime
* [Yarn](https://yarnpkg.com/lang/en/) - JavaScript dependency management
