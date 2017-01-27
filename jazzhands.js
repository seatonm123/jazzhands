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
    word: "Crumb",
    description: "Someone for whom it is impossible to show respect",
    quote: "Sleazy Eddie is a real crumb. "
}, {
    word: "Crib",
    description: "See 'Pad'",
    quote: "Hey, baby, come on up to my crib awhile and relax. "
}, {
    word: "Crazy",
    description: "Another Jazz superlative, you Jive A-- MotherF-----",
    quote: "Someone who is not thought highly of. "
}, {
    word: "Cornball",
    description: "A jazz man's title for trite, sweet or stale",
    quote: "Man, Guy Lombardo plays some 'cornball music'. "
}, {
    word: "Cool",
    description: "A restrained approach to music. A superlative which has gained wide acceptance outside of Jazz",
    quote: "That cat Miles Davis plays some 'cool' Jazz. That cat Miles is 'cool'."
}, {
    word: "Clinker",
    description: "A bad note or one that is fluffed",
    quote: "Hey, Charlie, that was some 'clinker' that you just hit. "
}];
var currentQuote = 0;

function jazzHands() {

    $("cat").click(function() {
      if (currentQuote === jazzQuote.length - 1) {
      console.log(jazzQuote.length - 1);

  } else {
  }

    })


}
