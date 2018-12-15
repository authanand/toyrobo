function ToyRobo () {
    this.placed = false;
    this.x      = null;
    this.y      = null;
    this.face   = null;

    this.faceMap = {
        north: {
          value: 'north',
          left: 'west',
          right: 'east'
        },
        east: {
          value: 'east',
          left: 'north',
          right: 'south'
        },
        south: {
          value: 'south',
          left: 'east',
          right: 'west'
        },
        west: {
          value: 'west',
          left: 'south',
          right: 'north'
        }
      };
}

ToyRobo.prototype.loadData = function(data) {
    if(!data) return;

    for(var i=0; i<data.length; i++){
        if(data[i].indexOf('PLACE') >= 0){
            this.placeRobot(data, i);
        }else if(data[i].toLowerCase()=='report'){
            this.report();
        }else if(data[i].toLowerCase()=='move'){
            this.move();
        }else{
         
            this.turn(data[i].toLowerCase());
        }
    }
};

ToyRobo.prototype.placeRobot = function(arr, index){    
    arr = arr.map(function(d) { return d.replace('PLACE ', ''); });
    arr = arr[index].split(',');

    if(typeof this.faceMap[arr[2].toLowerCase()]!='undefined') 
    {
    if(parseInt(arr[0])>=0 && parseInt(arr[0]) <=4 && parseInt(arr[1])>=0 && parseInt(arr[1]) <=4)
      {
        this.x      = parseInt(arr[0]);
        this.y      = parseInt(arr[1]);
        this.placed = true;
        this.face   = arr[2].toLowerCase();

        console.log('Robot placed: '+ this.x + ', ' + this.y + ', ' + this.face.toUpperCase() );
      }
    }
}

ToyRobo.prototype.report = function (){
    if(!this.placed) 
    {
        console.log( chalk.red('Robot is not placed'));
        return;
    }
    console.log( chalk.yellow('##########################################################'));
    console.log( chalk.green('Report: ' + this.x + ', ' + this.y + ', ' + this.face.toUpperCase() ));
    console.log( chalk.yellow('##########################################################'));
}

ToyRobo.prototype.move = function (){
    if(this.placed){
        switch (this.face) {
            case 'north':
              if(this.y+1 <= 4)
                  this.y++;
              break;
            case 'east':
              if(this.x+1 <= 4)
                 this.x++; 
              break;
            case 'south':
              if(this.y-1 >= 0)
                 this.y--;
              break;
            case 'west':
              if(this.x-1 >= 0)
              this.x--;
                break;
            default:
              break;
          }
        }
}

ToyRobo.prototype.turn = function(direction) {
    // Ignore command if robot is not yet placed
    if (!this.placed) {
      return;
    }

    var resultDirection = this.faceMap[this.face][direction];
  
    if (resultDirection) {
      this.face = resultDirection;
    }
  console.log( 'Robot current direction: ' + this.face.toUpperCase() );
};  


module.exports = ToyRobo;
