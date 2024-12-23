const cards = [
  {
    name: "F1",
    roll: "5+",
    description:
      "Pull a card from a player, if it’s a challenge card, pull a second card.",
  },
  { name: "F2", roll: "8+", description: "Destroy a hero card" },
  {
    name: "F3",
    roll: "7+",
    description: "Each other players discard a card and pick one add to hand",
  },
  { name: "F4", roll: "5+", description: "Choose a player to discard 2 cards" },
  {
    name: "F5",
    roll: "7+",
    description: "Pull a card from a player, if it’s a hero then pull a second",
  },
  {
    name: "F6",
    roll: "6+",
    description: "Every other player with a fighter in party discard a card",
  },
  { name: "F7", roll: "10+", description: "Discard up to 3 to destroy hero’s" },
  {
    name: "F8",
    roll: "8+",
    description:
      "Draw 2 cards, if there is a challenge then review and destroy a hero",
  },
  { name: "R1", roll: "9+", description: "Destroy a hero and draw a card" },
  { name: "R2", roll: "8+", description: "Draw 3 cards and discard a card" },
  {
    name: "R3",
    roll: "5+",
    description: "Search and get an item card from the discard pile",
  },
  {
    name: "R4",
    roll: "8+",
    description: "Draw 2 cards, if at least one is item, then play it.",
  },
  {
    name: "R5",
    roll: "6+",
    description: "Play an item from hand and draw a card",
  },
  {
    name: "R6",
    roll: "7+",
    description:
      "Look the top 3 cards from main and pick one, put the remaining back in any order",
  },
  { name: "R7", roll: "10+", description: "Draw cards until have 7 in hand" },
  { name: "R8", roll: "5+", description: "Look at another player’s hand" },
  { name: "T1", roll: "9+", description: "Steal a hero card" },
  {
    name: "T2",
    roll: "6+",
    description: "Pull a card from a player hand, if it’s an item then play",
  },
  {
    name: "T3",
    roll: "10+",
    description:
      "Steal a hero from other player party and pull a card from hand",
  },
  {
    name: "T4",
    roll: "6+",
    description:
      "Pull 2 cards from other player hand and that player draws a card",
  },
  { name: "T5", roll: "8+", description: "Choose a card from other hand" },
  {
    name: "T6",
    roll: "6+",
    description: "Pull 2 cards from other player hand and discard one",
  },
  {
    name: "T7",
    roll: "9+",
    description: "Destroy a hero card and add the equipped item to your hand.",
  },
  {
    name: "T8",
    roll: "7+",
    description:
      "Pull a card from all other players that have a Thief in party",
  },
  {
    name: "G1",
    roll: "7+",
    description: "Search a discard pile and add a hero to your hand.",
  },
  {
    name: "G2",
    roll: "5+",
    description: "Remove a curse on a hero in your party to your hand.",
  },
  {
    name: "G3",
    roll: "6+",
    description: "Search the discard pile and add a modifier to your hand.",
  },
  {
    name: "G4",
    roll: "6+",
    description: "+3 to all your roll till the end of your term.",
  },
  {
    name: "G5",
    roll: "9+",
    description: "+5 to all your roll till the end of your term.",
  },
  {
    name: "G6",
    roll: "8+",
    description:
      "Cards you play can not be challenged till the end of your term.",
  },
  {
    name: "G7",
    roll: "8+",
    description: "Hero in your party can not be destroyed till your next term.",
  },
  {
    name: "G8",
    roll: "9+",
    description:
      "Hero cards in your party cannot be stolen until your next turn.",
  },
  {
    name: "W1",
    roll: "7+",
    description: "Choose a player. That player must sacrifice a hero card",
  },
  {
    name: "W2",
    roll: "6+",
    description:
      "Pull a card from another players hand. If it is a magic card, you may play it immediately",
  },
  {
    name: "W3",
    roll: "10+",
    description: "Each other player must sacrifice a hero card",
  },
  {
    name: "W4",
    roll: "10+",
    description: "Steal a hero card and roll to use its effect immediately",
  },
  {
    name: "W5",
    roll: "11+",
    description: "Steal a hero card and destroy a hero card",
  },
  { name: "W6", roll: "10+", description: "Destroy 2 hero cards" },
  {
    name: "W7",
    roll: "5+",
    description:
      "Search the discard pile for a magic card and add it to your hand",
  },
  {
    name: "W8",
    roll: "6+",
    description:
      "Draw a card. If magic card, you may play it immediately and draw a second card",
  },
  {
    name: "B1",
    roll: "7+",
    description:
      "Draw a card. If that card is a hero card, you may play immediately",
  },
  {
    name: "B2",
    roll: "7+",
    description:
      "Pull a card from another players hand. If that card is a hero card, you may play it immediately",
  },
  {
    name: "B3",
    roll: "8+",
    description: "Draw a card and play a hero card from your hand immediately",
  },
  { name: "B4", roll: "2+", description: "Do nothing" },
  {
    name: "B5",
    roll: "6+",
    description:
      "Choose a player. Steal a hero card and move this card to that player's party.",
  },
  { name: "B6", roll: "9+", description: "Trade hands with another player" },
  {
    name: "B7",
    roll: "8+",
    description: "Each other player must give you a card from their hand",
  },
  { name: "B8", roll: "7+", description: "Draw 2 cards" },
  {
    name: "DS",
    roll: "Destructive Spell",
    description: "Discard a card, then destroy a hero card.",
  },
  {
    name: "ET",
    roll: "Entangling Trap",
    description: "Discard 2 cards, then steal a hero card.",
  },
  {
    name: "CB",
    roll: "Critical Boost",
    description: "Draw 3 cards and discard a card.",
  },
  {
    name: "FE",
    roll: "Forced Exchange",
    description:
      "Choose a player. Steal a hero card from that player's party, then move a hero card from your party to that player's party.",
  },
  {
    name: "WC",
    roll: "Winds of Change",
    description:
      "Return an item card equipped to any player's hero card to that player's hand, then draw a card.",
  },
  {
    name: "CF",
    roll: "Call to the Fallen",
    description:
      "Search the discard pile for a hero card and add it to your hand.",
  },
  {
    name: "FW",
    roll: "Forceful Winds",
    description:
      "Return every equipped item card to its respective player's hand.",
  },
  {
    name: "PRC",
    roll: "Particularly Rusty Coin",
    description:
      "If you unsuccessfully roll to use the equipped hero card's effect, draw a card.",
  },
  {
    name: "DD",
    roll: "Decoy Doll",
    description:
      "If the equipped hero card would be sacrificed or destroyed, move this card to the discard pile instead.",
  },
  {
    name: "RBR",
    roll: "Really Big Ring",
    description:
      "Each time you roll to use the equipped hero card's effect, +2 to your roll.",
  },
  {
    name: "CSC",
    roll: "Curse of the Snake Eyes",
    description:
      "Each time you roll to use the equipped hero card's effect, -2 to your roll.",
  },
  {
    name: "SK",
    roll: "Sealing Key",
    description: "You cannot use the equipped hero card's effect.",
  },
  {
    name: "SSC",
    roll: "Suspiciously Shiny Coin",
    description:
      "If you successfully roll to use the equipped hero card's effect, discard a card.",
  },
  {
    name: "A1",
    roll: "6+",
    description:
      "For the rest of your turn, if you sacrifice or destroy a hero card, you may search discard pile for a hero and add to your hand",
  },
  {
    name: "A2",
    roll: "8+",
    description: "For each monster card in your party, steal a hero",
  },
  {
    name: "A3",
    roll: "5+",
    description:
      "For each other hero card in your party, +1 to all your rolls until the end of your turn",
  },
  {
    name: "A4",
    roll: "9+",
    description:
      "Draw a card for each monster card in each other player’s party",
  },
  {
    name: "A5",
    roll: "8+",
    description:
      "Choose player. Return all equipped item cards in that player's party to your hand",
  },
  {
    name: "A6",
    roll: "6+",
    description:
      "+4 to your rolls to attach a monster card until the end of your turn",
  },
  {
    name: "A7",
    roll: "5+",
    description:
      "Draw a card for each item card equipped to a hero in your party",
  },
  {
    name: "A8",
    roll: "7+",
    description: "You may immediately play up to 2 item cards",
  },
  {
    name: "D1",
    roll: "8-",
    description:
      "No other player can play modifier cards until the end of your turn",
  },
  {
    name: "D2",
    roll: "7-",
    description:
      "Until your next turn, if a hero card in your party would be sacrificed or destroyed, return it to your hand",
  },
  {
    name: "D3",
    roll: "7-",
    description: "You may play up to 2 magic cards immediately",
  },
  { name: "D4", roll: "8-", description: "Attack a monster card immediately" },
  {
    name: "D5",
    roll: "5-",
    description:
      "Search discard pile for a hero card and add it to your hand, then play it immediately",
  },
  {
    name: "D6",
    roll: "7-",
    description:
      "Sacrifice a hero card, +5 or -5 to each of your rolls until your next turn",
  },
  {
    name: "D7",
    roll: "7-",
    description: "Sacrifice a hero card, then draw cards until you have 7",
  },
  {
    name: "D8",
    roll: "6-",
    description:
      "Look at another player's hand. Choose a hero and bring it into your party",
  },
  {
    name: "RR",
    roll: "Rapid Refresh",
    description: "Discard every card in your hand and draw 4 cards",
  },
  {
    name: "AC",
    roll: "Warrior Challenge",
    description:
      "Require 1 warrior, same as normal challenge but +3 to your roll",
  },
  {
    name: "DC",
    roll: "Druid Challenge",
    description:
      "Require 1 warrior, same as normal challenge but +3 to your roll",
  },
  {
    name: "BC",
    roll: "Bottomless Bag",
    description:
      "Move all face-up monster cards to the bottom of the monster deck and flip the top 3 face-up. May spend an extra action point this turn",
  },
  {
    name: "TH",
    roll: "Temporal Hourglass",
    description:
      "If you unsuccessfully roll to use equipped hero card's effect, you may spend extra action point.",
  },
  {
    name: "EBR",
    roll: "Even Bigger Ring",
    description:
      "Each time you roll to use the equipped hero card's effect, +4 to your roll",
  },
  {
    name: "BB",
    roll: "Bottomless Bag",
    description:
      "You may roll to use the equipped hero card's effect more than once per turn, at a cost of one action point for each roll to use",
  },
  {
    name: "ST",
    roll: "Soul Tether",
    description:
      "If any hero card in your party is sacrificed or destroyed, sacrifice the equipped hero card",
  },
  {
    name: "CG",
    roll: "Cursed Glove",
    description:
      "If another hero card in your party is stolen, move the equipped hero card to the party of the player who stole it as well.",
  },
];

const cardInput = document.querySelector("input");
const button = document.querySelector("button");
const cardName = document.querySelector("h2");
const roll = cardName.nextElementSibling;
const description = roll.nextElementSibling;

// Add event listener to the button
button.addEventListener("click", function (event) {
  event.preventDefault();
  search();
});

// Define the search function
function search() {
  // Get the input value and convert to uppercase
  const cardValue = cardInput.value.toUpperCase();

  // Find the card in the cards array
  const found = cards.find(function (card) {
    return card.name === cardValue;
  });

  // Update the DOM elements based on the search result
  if (found) {
    cardName.textContent = found.name;
    roll.textContent = found.roll;
    description.textContent = found.description;
  } else {
    cardName.textContent = "Card not found";
    roll.textContent = "";
    description.textContent = "";
  }
}
