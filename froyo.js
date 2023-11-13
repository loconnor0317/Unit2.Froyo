//REQUIREMENTS:

//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe an object listing how many of each flavor they have ordered. 

//In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

//HINTS:
//Can you live serve the HTML file? YES

//Is the HTML file connected to the JS file?  YES


//Can you prompt the user for froyo flavors and store their result?
//Can you parse the user input into an array of froyo flavors? 
//Split the string of numbers into an array of strings. 

//Can you build an object to track which flavors you have observed so far?
//As you iterate through the array of flavors, when should that object be updated?
//Is your logic organized into a function?

//The latest changes have been pushed to the submitted Github repo.  YES
//The repo contains an HTML file and a connected JS file.   YES
//The user is prompted for froyo flavors upon entering the website.   YES
//The user's input string is split into an array of strings. YES
//A loop is used to iterate through the array of flavors.
//An object is used to keep count of how many orders there are of each flavor.
//The program correctly counts the number of each flavor in the user's input.
//The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
//Names are consistent and meaningful.
//The console output changes depending on the user's input

// Prompt the user for a list of FROYO FLAVORS separated by commas.

const userFroyoInput= prompt(
    "please enter a list of froyo flavors, separated by commas.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

//// Split the string of numbers into an array of strings.

const froyoOrder = userFroyoInput.split(
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);
//below is the order array (OF THE OBJECT) tracked in the amount of item in the order -
// IE: 3 vanilla, 1 strawberry, 2 coffee.

const userFroyoInput = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];

function mapOrder(elements) {
  const map ={} //this map will track quantity for each item
  for (let i = 0; i < elements.length; i++) { //<--we loop through the array of elements and if we already have a key (if it already exists), add one to the value (LINE 53). 
    if(map[elements[i]]) {
    
    map[elements[i]]++; //<--UPDATES A KEY VALUE PAIR IN MAP
    } else {
      //BELOW SETS A NEW KEY VALUE PAIR IN MAP  
      map[elements[i]] =1; //IF THE KEY ALREADY EXISTS, IT WILL INCREASE BY ONE AND BE ADDED TO ELEMENT TOTAL #
    }
}
  return map;
}

//to actually see the map above, we need to: console.log(mapOrder(userFroyoInput)))

const froyoChoice1 = {
    title: "vanilla",
    flavor: "icky",
    color: "white",
}

const froyoChoice2 = {
    title: "strawberry",
    flavor: "sweet",
    color: "pink",
}

const froyoChoice3= {
    title: "coffee",
    flavor: "hyper",
    color: "brown",
}
 