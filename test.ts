class Panthera {
	   roar: string;
	      constructor(currentRoar: string) {
		            this.roar = currentRoar;
			       }
}

class Tiger extends Panthera {
	   stripes: boolean = true;

}
interface Astronaut {
	   name: string;
}

function astronautName (astronaut: Astronaut) {
	   return astronaut.name;
}

let bob = {name: "Bob"};
console.log(astronautName(bob));

let tigger = new Tiger("loud");
console.log(tigger.roar);
console.log(tigger.stripes);



interface interfaceName {
	   someProperty: number;
}

class className implements interfaceName {
	   constructor(x: number) {
		         this.someProperty = x;
			    }
}

interface Panthera {
	   roar: string;
}

class Tiger implements Panthera {
	   roar: string;

	      constructor() {
		            this.roar = 'rooooaaaarrrr';
			       }
}

class Lion implements Panthera {
	   roar: string;

	      constructor() {
		            this.roar = 'ROOOOAAAAARRRRRR';
			       }
}

function pantheraSounds(panthera: Panthera) {
	   console.log(`Panthera says ${panthera.roar}`);
}

let tiger = new Tiger();
let lion = new Lion();

pantheraSounds(tiger);
pantheraSounds(lion);

interface giraffeTwo = {
	     species: string;
	          name: string;
		       weight?: number;
		            age: number;
			         diet: string;
};

export class className {
	   // properties and methods
}

import { className } from 'relativefilepath';

let newClass = new className;


