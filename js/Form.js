class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.resetButton = createButton('Reset')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Boat Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 30 , displayHeight/2);
    this.resetButton.position(displayWidth - 100, 20)

    this.setElementsStyle();

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    

    this.resetButton.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateboatsAtEnd(0);
      database.ref("players").remove()
      location.reload();
    
    });

  }

  setElementsStyle()
   { this.title.class("gameTitle"); 
   this.input.class("customInput");
    this.button.class("customButton");
     this.greeting.class("greeting"); 
    }
}

