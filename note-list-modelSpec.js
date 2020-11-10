'use strict';

(function(){
  function hasEmptyArray() {
    notelist = new NoteList;

    if(notelist.listofnotes() === (array.length === 0) ) {
      return console.log('passed');
    } else {
      return 'failed';
    }
  };
  hasEmptyArray();
})(this);
