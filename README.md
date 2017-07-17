# eao-public

This project provides a baseline code base to help you kick start an Angular project that is based on BC Goverment themed Bootstrap styles, footers and headers.


This application has a complete development environment set up, including build, test, deploy, routing, simple components, service, and directives as examples and templates.

The goal is to help you start a project fast, enable you to focus on building actual business logics for your project.

[Check out a running demo of just scaffold out of the box](https://eao-public-demo.pathfinder.gov.bc.ca)

# Development Prerequisites

## Node and NPM

Node 6.x or greater must be installed.

## Install angular/cli

**Note, use `angular/cli`, do not use `angular/angular-cli`**

```bash
npm i -g @angular/cli`
```

`ng` is the CLI itself


**Verify the installation**

```bash
npm list -g @angular/cli --depth=0
ng -v
```

## Install [yarn](https://yarnpkg.com/lang/en/docs/install/#alternatives-tab)

```bash
npm i -g yarn
```

## Fork, Build and Deployment

1. After installing Node and Yarn, you can fork or straight download a copy of this application to start your own app.
1. First download all the dependencies with `yarn install`
1. `npm start` to start the a webpack server to run the application on port 4300

    Navigate to `http://localhost:4300` to verify that the application is running

    To change the default port, open `.angular-cli.json`, change the value on `default.serve.port`
1. Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, like so: `ng serve --prod` to run in production mode.
1. Run `npm run lint` to check styles

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Example: Generate a customer component

```bash
ng g c customer
```

### Example: Generate a directive: search-box

```bash
ng g d search-box
```

### Example: Generate a service: general-data

```bash
ng g s general-data
```

Angular will give out a warning line after this command,

> WARNING Service is generated but not provided, it must be provided to be used

After generating a service, we must go to its owning module and add the service to the `providers` array.

### Example: Generate a service and include it in a module automatically

```bash
ng g s general-data2 -m app.module
```

### Example: Generate a class, an interface and enum

```bash
# class
ng g cl models/customer

# interface
ng g i models/person

# enum
ng g enum models/gender
```

### Example: Generate a pipe

```bash
ng g pipe shared/init-caps
```

### Generate a module

Create a login directory and generate a login module in that directory

```bash
ng g module login/login.module
```

### Add/Generate Routing Features

Generate a module called admin and add routing feature to it.

```bash
ng g module admin --routing
```

## Running Tests

### Unit tests

Set up via Karma, Jasmin
1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### End-to-end tests

Set up with Protractor
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

1. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
1. Before running the tests make sure you are serving the app via `ng serve`.

## Change aspects of the application

### Change style dialect

```bash
ng set default.styleExt css
```

## Regenerate a brand new project with routing and scss options

```bash
ng new my-app --routing --style scss
```

## Getting Help

1. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
1. `ng doc component` to look up documentation for features
1. `ng serve --help` to look up doc for `ng serve` command

# Build and Deployment

For dev, test, and production builds on OpenShift/Jenkins see [openshift/README.md](https://github.com/bcgov/eao-public/blob/master/openshift/README.md) for detailed instructions
on how to setup in an OpenShift environment using nginx.

# How to Contribute

Feel free to create pull requests from the default "master" branch, click here to create one automatically: https://github.com/bcgov/eao-public/pull/new/master.

# Licence

    Copyright 2017 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
