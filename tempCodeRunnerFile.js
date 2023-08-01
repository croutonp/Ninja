class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(this.name);
  }

  showStats() {
    console.log(
      `Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`
    );
  }

  drinkSake() {
    this.health += 10;
  }
}


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom = 10
        this.health = 200
        this.speed = 10
        this.strength = 10
}

    showStats(){
        super.showStats()
    }


speakWisdom(){
    super.drinkSake(this);
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    
}
}

const ninja1 = new Ninja("kevin");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const sensei = new Sensei("jevin");
super.sensei.showStats();
super.sensei.speakWisdom();