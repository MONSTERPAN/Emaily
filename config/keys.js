//key.js - figure out what set of credential to return
if (process.env.NODE_ENV === "production") {
  //we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  //we are in development - return the dev keys!!!
  module.exports = require("./dev");
}

//yvj9N0dG5PO7ybaZ
//mongodb+srv://emaily-prod:yvj9N0dG5PO7ybaZ@cluster0-hle2l.mongodb.net/test?retryWrites=true&w=majority
