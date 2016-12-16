// tower-of-babel

//ex1
//var arg = process.argv[2];
//console.log(`Hello ${arg}`);

//ex2
/*class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  damage() {
    this.health_ = this.health_ - 10;
  }
  getHealth() {
    return this.health_;
  }
  toString() {
    return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
  }
}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(x, y);
character.damage();
console.log(character.toString());
*/

//ex3
/*class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  damage() {
    this.health_ = this.health_ - 10;
  }
  getHealth() {
    return this.health_;
  }
  toString() {
    return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
  }
}

class Player extends Character{
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  toString() {
    return `name: ${this.name} ${super.toString()}`;
  }
}

var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);
var name = process.argv[4];
var character = new Character(x, y);
character.damage();
console.log(character.toString());
var player = new Player(x, y, name);
player.damage();
player.move(7,8);
console.log(player.toString());
*/

//ex4
//import {message} from './message'
//console.log(message);
/*var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./Math').PI;
var sqrt = require('./Math').sqrt;
var square = require('./Math').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
*/

//ex5
/*var arg1 = process.argv[2];
var arg2 = process.argv[3];
import Maths from './Math';
console.log(Maths.PI);
console.log(Maths.sqrt(+arg1));
console.log(Maths.square(+arg2));
*/

//ex6
/*var a = 5;
const b = process.argv[2];

if(a === 5) {
  let c = 4;
  console.log(c);

  let b = 8;
  console.log(b);
}

console.log(a);
console.log(b);

try {
  c = 1000;
} catch(e) {
  console.log(e);
}*/

//ex7
var obj = {
  [(()=>+process.argv[2]%2 === 0?'even':'odd')()] : +process.argv[2],
  [(()=>process.argv[3] + process.argv[2])()] : (()=>process.argv[3] + process.argv[2])()
}
console.log(obj);
