/* In this exercise, we're going to create a constructor for maps in a 2D game. A Map is an array of arrays of 
Tile objects. A Tile object represents one square in the map. It only has a type property which will determine if 
it's water, grass or sand. The Map object will have width and height properties, and its constructor will generate
width * height Tile objects.

To do this exercise, let's follow these steps:

Create a constructor function called Tile that can create new tiles for our map. This function will take parameter type 
and create an object that has these properties:
type: whatever was passed to the Tile constructor function
The Tile objects should also have a method called isWalkable. This method should, using this.type, return true or false 
depending on whether the tile can be walked on. The function should return true if the type is "grass" or "sand". The 
function should return false if the type is anything else.
Create a constructor function called Map that will generate a map. This function will take parameters width and height 
and create a map object with these properties:
width: whatever was passed to the Map constructor function (should be an integer value)
height: whatever was passed to the Map constructor function (should be an integer value)
tiles: this property should be created as a 2D array of Tile objects inside the constructor. Using two nested for loops 
bound by width and height respectively, create new Tile objects and give them a random value for the type, between "grass",
"sand" and "water".
The Map objects should also have two methods on them:

getWalkableOutput: this method should iterate over the this.tiles 2D array, and output in the console a rectangle 
representing the "walkability" of the map. For walkable tiles, use an O, and for unwalkable tiles use an X. For example, 
your output could look something like this for a 4x4 map:
OOOO
OXXO
OOXO
OOOO
getAsciiOutput: this method should iterate over the this.tiles 2D array and output in the console a rectangle representing
the disposition of the map. For grass tiles, use a *, for sand tiles use a : and for water use a ~ symbol. For example, 
your output could look something like this for the same 4x4 map as above:
****
*~~*
**~*
::::
spawnWarrior (challenge): using the Warrior constructor that you created in the above exercise, create a method 
spawnWarrior that takes a warrior object and a x and y position. This method of the Map should take the warrior object and 
associate it to the appropriate Tile.
*/
function Tile (type) {
   this.type = type;
}

Tile.prototype = {
   isWalkable: function (type) {
       if (this.type === "grass" || this.type === "sand") {
           return true;
       } 
       else {
           return false;
       }
   }
}


function randomType () {
   var type;
   var randomTypes = Math.random();
   if (randomTypes < 0.33) {
       return "grass";
   }
   if (randomTypes > 0.33 && randomTypes < 0.66) {
       return "sand";
   }
   if (randomTypes > 0.66) {
       return "water";
   }
};

function Map (width, height) {
   if (!isNaN(width)) {
       this.width = width;
   }
   if (!isNaN(height)) {
      this.height = height;
   }
   
   }
   
   
   Map.prototype = {
       generateMap: function () {
       var emptyArray = [];
   
   for (var x = 0; x < this.width; x++) {
       var innerArr = [];
       for (var y = 0; y < this.height; y++) {
           var u = new Tile(randomType());
               innerArr.push(u.type);
           }
            emptyArray.push(innerArr);
       }
       this.tiles = emptyArray;
   }
   }
   
var map = new Map(4,4);
map.generateMap();
console.log(map);

     /*  getWalkableOutput: this method should iterate over the this.tiles 2D array, and output in the console a rectangle 
representing the "walkability" of the map. For walkable tiles, use an O, and for unwalkable tiles use an X. For example, 
your output could look something like this for a 4x4 map:
OOOO
OXXO
OOXO
OOOO
getAsciiOutput: this method should iterate over the this.tiles 2D array and output in the console a rectangle representing
the disposition of the map. For grass tiles, use a *, for sand tiles use a : and for water use a ~ symbol. For example, 
your output could look something like this for the same 4x4 map as above:
****
*~~*
**~*
::::

/*tiles: this property should be created as a 2D array of Tile objects inside the constructor. Using two nested for loops 
bound by width and height respectively, create new Tile objects and give them a random value for the type, between "grass",
"sand" and "water".*/