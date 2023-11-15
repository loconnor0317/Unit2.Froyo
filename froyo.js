
const visitorFroyo= prompt(
    "Please enter a list of froyo flavors, separated by commas.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const flavors = []; 
  flavors.push('vanilla','vanilla','vanilla','strawberry','coffee','coffee');

console.log(flavors);

const froyoFlavors = {
    vanilla: 3,
    strawberry: 1,
    coffee: 2, 
}
console.log(froyoFlavors);

function logValues(froyoFlavors) {
  const valuesArray = froyoFlavors.values(obj);
  for (let i = 0; i < valuesArray.length; i++) {
    console.log("in log values", valuesArray[i]);
  }
}

// function mapOrder() 
//I GOT CONFUSED BY THIS POINT!

function mapOrder(elements) {
  const map = {};
  for (let i = 0, i < elements.length; i++) {
    if (map[elements[i]]) {
      map[elements[i]]++;
      //update key value pair in map
    } else {
        //set new key value pair map
        map[elements[i]] = 1;
    }
  }
  return map;
}
console.log(mapOrder(cart));


  





 