// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// STEP 8: Rewrite the 'speak' function such that it is attached to the
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it

(function(window)
{
	var speakWord = "Good Bye";
	var byeSpeaker = function (name)
	{
  		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);