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


//Code is in a file called note-controller.js.
//Code uses Javascript classes to define a note controller that can be instantiated.
// #The note controller constructor does the following:
// #Takes a note list model as a parameter.
// #Adds a note that says Favourite drink: seltzer.
// #Creates a note list view, passing in the note list model.
// #The note controller has a method that gets HTML from the
// note list view and inserts it into the app element.
