const APP_SERVE_PORT = 4210
module.exports = {
  scripts: {
    serve: {
      app: `ng serve --port=${APP_SERVE_PORT} --open`,
    },
    "build": {
      // "app": `ng build --prod --base-href "http://zaknafeyn.github.io/paper-calc/"`,
      "app": `ng build --prod --base-href="/paper-calc/"`
    },
    "deploy": {
      "ghpages": "nps build.app && npx angular-cli-ghpages --no-silent --dir=dist/paper-calc"
    }
  }
};
