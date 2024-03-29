class Form {

  constructor() {
    // give proporties to the object
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide()
  {
    //hide everything which is written
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display()
  {
    
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2.5,0);

    this.input.position(displayWidth/2.5,displayHeight/3-100);
    this.button.position(displayWidth/2.5+70,displayHeight/3);
this.reset.position(displayWidth-100,30);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2.5,displayHeight/3-100);
    });
this.reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0);
});
  }
}
