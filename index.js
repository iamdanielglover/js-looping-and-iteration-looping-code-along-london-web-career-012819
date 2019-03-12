// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGift(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
};

function printBadges(array){
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array;
};

function maybeTrue() {
    return Math.random() >= 0.5;
}

while (maybeTrue()) {
    console.log('And I ran... I ran so far away!');
}

function tailsNeverFails() {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++
  }
  // console.log(`You got ${tails} tails in a row!`)
  return `You got ${tails} tails in a row!`
}

printBadges(['Ada', 'Brendan', 'Ali']);
wrapGift(gifts);
tailsNeverFails();
