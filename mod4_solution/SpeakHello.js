// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// STEP 4: Rewrite the 'speak' function such that it is attached to the
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it


(function(window)
{
	var speakWord = "Hello";
	var helloSpeaker = function (name)
	{
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);