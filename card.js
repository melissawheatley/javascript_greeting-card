// add one or more methods to CardMaker, then use it as a prototype for at least three other objects using Object.create()

// Minimum requirement
// Each new object should represent a different type of greeting card, such as birthday or Valentine's Day, with its own unique properties. 
// Output two messages, one from the front and one from the inside of the card, to the console.

// Challenges
// Make additional objects that allow more specific card types, such as children's birthday and adult's birthday, that inherit from a BirthdayCard object.
// Output the HTML strings with classes to the DOM that you can style with CSS.
// Refactor "makeFrontMessage" to return something more elaborate.

const CardMaker = function(cardCover, cardSentence, cardLine){
    this.makeFrontMessage = `<h2>${cardCover}</h2>`,
    this.makeInsideMessages = `<p>${cardSentence}</p><p class="cardLine">${cardLine}</p>`
    }; 

  //Refactor this to link this object to cardMaker
  const BirthdayCard = new CardMaker("They say it's your birthday...", "Let's Celebrate!", "Happy Birthday!!!");
  const vdayCard = new CardMaker("Roses are Red, Violets are Blue...", "I'm bad at cards, but really like you.", "Happy Valentine's Day!");
  const christmasCard = new CardMaker("For unto us a child is born", "Celebrate the reason for the season", "Merry Christmas!");
  
  console.log(BirthdayCard);
  console.log(vdayCard);
  console.log(christmasCard);

  //   CardMaker.prototype = {
//       getFrontMessage(){
//           return this.makeFrontMessage;
//       },
//       getInsideMessages(){
//           return this.makeInsideMessages;
//       }
//   };


