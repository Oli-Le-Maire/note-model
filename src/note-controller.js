class NoteController {

  constructor(noteListInstance = new NoteList) {
    this.noteListInstance = noteListInstance;
    this.noteListInstance.addNote("Favourite drink: seltzer");
  }

  helloToHowdy() {
    let appDiv = document.getElementById('app');
    let greeting = "howdy!";
    appDiv.innerHTML = greeting;
  };
}

var notecontroller = new NoteController
notecontroller.helloToHowdy();
