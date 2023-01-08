const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHanlder,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHanlder,
  },
];

module.exports = routes;
