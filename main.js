/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
let oneSix = document.querySelector('#d6-roll')
let twoSixOne = document.querySelector('#double-d6-roll-1')
let twoSixTwo = document.querySelector('#double-d6-roll-2')
let twoSix = document.querySelector('#diceTimesTwo')
let twelve = document.querySelector('#d12-roll')
let twenty = document.querySelector('#d20-roll')
let reset = document.querySelector('#reset-button')
oneSix.src = 'images/start/d6.png'
twoSixOne.src = 'images/start/d6.png'
twoSixTwo.src = 'images/start/d6.png'
twelve.src = 'images/start/d12.jpeg'
twenty.src = 'images/start/d20.jpg'
let allData = document.querySelectorAll('.data')
for(num of allData){
  num.innerText = 'NA'
}


/*******************
 * EVENT LISTENERS *
 *******************/
oneSix.addEventListener('click', rollOneSix)
twoSixOne.addEventListener('click', rollTwoSixes)
twoSixTwo.addEventListener('click', rollTwoSixes)
twelve.addEventListener('click', rollTwelve)
twenty.addEventListener('click', rollTwenty)
reset.addEventListener('click', resetAll)

/******************
 * RESET FUNCTION *
 ******************/
function resetAll(){
  oneSix.src = 'images/start/d6.png'
  twoSixOne.src = 'images/start/d6.png'
  twoSixTwo.src = 'images/start/d6.png'
  twelve.src = 'images/start/d12.jpeg'
  twenty.src = 'images/start/d20.jpg'
  for(num of allData){
    num.innerText = 'NA'
  }
  while(sixes.length !== 0){
    sixes.shift()
  }
  while(doubleSixes.length !== 0){
    doubleSixes.shift()
  }
  while(twelves.length !== 0){
    twelves.shift()
  }
  while(twenties.length !== 0){
    twenties.shift()
  }
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function rollOneSix(){
  let roll = getRandomNumber(6)
  sixes.push(roll)
  oneSix.src = `images/d6/${roll}.png`
  let sum = 0
  for(num of sixes){
    sum += num
  }
  let mean = sum / sixes.length
  document.querySelector('#d6-rolls-mean').innerText = mean
  let orderedSixes = sortByNumber(sixes)
  let median = 0
  if(orderedSixes.length % 2 !== 0){
    median = orderedSixes[Math.floor(orderedSixes.length / 2)]
  }else{
    median = (orderedSixes[orderedSixes.length / 2 - 1] + orderedSixes[orderedSixes.length / 2]) / 2
  }
  document.querySelector('#d6-rolls-median').innerText = median
  let mode = orderedSixes[0]
  let otherModes = ''
  let currentRepeats = 1
  let mostRepeats = 1
  for(i = 1; i <= orderedSixes.length; i++){
    if(orderedSixes[i - 1] === orderedSixes[i]){
      currentRepeats ++
    } else if(orderedSixes[i - 1] !== orderedSixes[i]){
      if(currentRepeats < mostRepeats){
        currentRepeats = 1
      } else if(currentRepeats === mostRepeats && orderedSixes[i - 1] === orderedSixes[0]){
        currentRepeats = 1
      } else if(currentRepeats === mostRepeats && orderedSixes[i - 1] !== orderedSixes[0]){
        otherModes = otherModes + ' and ' + orderedSixes[i - 1]
        currentRepeats = 1
      } else if(currentRepeats > mostRepeats){
        mode = orderedSixes[i - 1]
        otherModes = ''
        mostrepeats = currentRepeats
        currentRepeats = 1
      }
    }
  }
  mode += otherModes
  document.querySelector('#d6-rolls-mode').innerText = mode
}


function rollTwoSixes(){
  let rollOne = getRandomNumber(6)
  let rollTwo = getRandomNumber(6)
  let roll = rollOne + rollTwo
  doubleSixes.push(roll)
  twoSixOne.src = `images/d6/${rollOne}.png`
  twoSixTwo.src = `images/d6/${rollTwo}.png`
  let sum = 0
  for(num of doubleSixes){
    sum += num
  }
  let mean = sum / doubleSixes.length
  document.querySelector('#double-d6-rolls-mean').innerText = mean
  let orderedDoubleSixes = sortByNumber(doubleSixes)
  let median = 0
  if(orderedDoubleSixes.length % 2 !== 0){
      median = orderedDoubleSixes[Math.floor(orderedDoubleSixes.length / 2)]
    }else{
      median = (orderedDoubleSixes[orderedDoubleSixes.length / 2 - 1] + orderedDoubleSixes[orderedDoubleSixes.length / 2]) / 2
    }
  document.querySelector('#double-d6-rolls-median').innerText = median
}


function rollTwelve(){
  let roll = getRandomNumber(12)
  twelves.push(roll)
  twelve.src = `images/numbers/${roll}.png`
  let sum = 0
  for(num of twelves){
    sum += num
  }
  let mean = sum / twelves.length
  document.querySelector('#d12-rolls-mean').innerText = mean
  let orderedTwelves = sortByNumber(twelves)
  let median = 0
  if(orderedTwelves.length % 2 !== 0){
      median = orderedTwelves[Math.floor(orderedTwelves.length / 2)]
    }else{
      median = (orderedTwelves[orderedTwelves.length / 2 - 1] + orderedTwelves[orderedTwelves.length / 2]) / 2
    }
  document.querySelector('#d12-rolls-median').innerText = median
}


function rollTwenty(){
  let roll = getRandomNumber(20)
  twenties.push(roll)
  twenty.src = `images/numbers/${roll}.png`
  let sum = 0
  for(num of twenties){
    sum += num
  }
  let mean = sum / twenties.length
  document.querySelector('#d20-rolls-mean').innerText = mean
  let orderedTwenties = sortByNumber(twenties)
  let median = 0
  if(orderedTwenties.length % 2 !== 0){
      median = orderedTwenties[Math.floor(orderedTwenties.length / 2)]
    }else{
      median = (orderedTwenties[orderedTwenties.length / 2 - 1] + orderedTwenties[orderedTwenties.length / 2]) / 2
    }
  document.querySelector('#d20-rolls-median').innerText = median
}
  




/****************
 * MATH SECTION *
 ****************/
