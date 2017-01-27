var jazzQuote = [{
    word: "Bad",
    description: "Good.",
    quote: "That dude Wynton Marsalis does some bad ass playin."
}, {
    word: "Balloon lungs",
    description: "A brass man with plenty of wind.",
    quote: "That cat must have balloon lungs, Stix said he held that note for three and half minutes!"
}, {
    word: "My Chops is beat.",
    description: "When a brass man's lips give out.",
    quote: "Too many high C's tonight, man, my chops is beat!!"
}, {
    word: "Chick",
    description: "A young and pretty girl.",
    quote: "Hey, Buster, leave it alone. That chick is outta your league."
}, {
    word: "Chill 'ya",
    description: "When an unusual hot passion gives you goose pimples.",
    quote: "Gee, Jody, doesn't it chill 'ya the way Benny plays the clarinet?"
}, {
    word: "JAMF",
    description: "Jive A-- Mother F----R",
    quote: "Someone who is not thought highly of. "
}]
var currentQuote = 0

function jazzHands() {

    $("cat").click(function() {
      if (currentQuote === jazzQuote.length - 1) {
      console.log(jazzQuote.length - 1);
      
  } else {
  }

    })


}
