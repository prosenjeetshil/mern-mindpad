const express = require("express");
const { getAllNotes, getNotebyId, createNote, updateNote, deleteNote } = require("../controllers/notesController");

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNotebyId);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;
