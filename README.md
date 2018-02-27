## fcc-voting-app

## FreeCodeCamp - Backend Challenges
## Dynamic Web Application Projects: [Build a Voting App](https://www.freecodecamp.org/challenges/build-a-voting-app)

### Getting started

```bash
npm run dev
```

Run `npm run dev` for a dev server. The browser will load `http://localhost:8080/`. Wait until the app is built. At any change, the app will automatically rebuild and sync the browser.

##### .env
```
# Node Server Port
PORT=8000

# Node Server Url
APP_URL=http://localhost:8000/

# BrowserSync Proxy Url
CALLBACK_URL=http://localhost:8080/

# MongodDB Url
MONGO_DB_URI=mongodb://localhost:27017/angular-api
```

### Client Code scaffolding

You can use `ng` [Angular CLI](https://github.com/angular/angular-cli) for client scaffolding.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `client/dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Built with [generator-angular-api](https://github.com/amimaro/generator-angular-api).
