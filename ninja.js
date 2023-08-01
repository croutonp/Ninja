class Ninja {
  constructor(name, health, speed,  strength) {
    this.name = name
    this.health = health
    this.speed = speed
    this.strength = strength
  }

  sayName() {
    console.log(this.name)
  }

  showStats() {
    console.log(
      `Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
    );
  }

  drinkSake() {
    this.health += 10
  }
}


class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
        
}

    showStats(){
        super.showStats()
    }


speakWisdom(){
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.")
    
}
}

const ninja1 = new Ninja("kevin", 90, 3, 3);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const sensei = new Sensei("jevin");
sensei.speakWisdom();
sensei.showStats();