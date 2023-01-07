const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/notes",
    handler: addNoteHandler,
  },
];

module.exports = routes;
