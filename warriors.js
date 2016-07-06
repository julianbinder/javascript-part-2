
  //* Create a constructor function called `Warrior` that can create new warriors. This function will take parameters 
  //`name`, and `gender`. `name` can be any string, `gender` can be `M` or `F`. It should create a warrior that has these 
  //properties:
    //* `name`: the value that was passed to the constructor
    //* `gender`: the value that was passed to the constructor
    //* `level`: 1
    //* `weapon`: wooden sword
    //* `power`: a random number between 1 and 100
  //* In addition to that, every object that gets created should have the following methods:
    //* `fight`: will output to the console: "<name> rushes to the arena with <his/her> <weapon>"
    //* `faceoff`: faceoff takes one argument called `opponent`. Based on the `power` of each opponent, this method should
    //output to the console which player won the fight based on their power. Be as creative as you like with the text of
    //this method :)
  //* Finally, create a bunch of warriors and make them fight together.
  
      function Warrior(name, gender) {
          this.name = name;
          this.gender = gender;
          
          this.level = 1;
          this.power = Math.random() * (100 -1) + 1;
          this.weapon = 'wooden sword';
      }
      
      Warrior.prototype = {
              fight: function() { 
          if (this.gender === "M") {
      console.log(this.name + " rushes to the arena with his " + this.weapon);
          }
           if (this.gender === "F") {
               console.log(this.name+" rushes to the arena with her "+this.weapon);
           }
      },
      
      faceoff: function(opponent) {
          if (this.power > opponent.power) {
              console.log(this.name+" wins! Beat that fucker into the ground!!! "+opponent.name+" is a loser.");
          } 
          if (opponent.power > this.power) {
              console.log(opponent.name+" wins! Beat that fucker into the ground!!! "+this.name+" is a loser.");
          }
      }
      }
          
        
    
          
  
     var julian = new Warrior("Julian", "M");
     var cyrus = new Warrior("Cyrus", "M");
     
     console.log(julian.faceoff(cyrus));
      
  