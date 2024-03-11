// Module 4 Assignment Instructions.

// The final output on the console should look like this:

/*
Hello Vinish
Good Bye Ram
Good Bye Mokshi
Good Bye Nick
Hello Jaanu
Hello Nicki
Hello Scient
Hello Charvin
Hello Cherry
Good Bye Fury
WARNING!!! WARNING!!!
*/

//The code does NOT currently work! It is YOUR job to make it work
//as described in the requirements and the steps in order to complete this
//assignment.
//WARNING!!! WARNING!!!


(function ()
{
  var names = ["Vinish", "Ram", "Mokshi", "Nick", "Jaanu", "Nicki", "Scient", "Charvin", "Cherry", "Fury"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        byeSpeaker(names[i]);
    }
    else {
      helloSpeaker(names[i]);
    }
  }
})();
    
    
    