(function testsInstanceCorrect() {
  var notecontroller = new NoteController();

  assert.isTrue(notecontroller instanceof NoteController)
  console.log("Tests instance is NoteController instance")
})(this);
