class Population{
  constructor() {
    this.rockets = [];
    this.popsize = 50;
    this.matingpool = [];

    for(let i=0; i<this.popsize; i++) {
      this.rockets[i] = new Rocket();
    }
  }

  evaluate() {
    let maxfit = 0;
    for(let i=0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      if(this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }

    for(let i=0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit;
    }
    this.matingpool = [];
    for(let i=0; i < this.popsize; i++) {
      let n = this.rockets[i].fitness * 100;
      for(let j=0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
    globalMaxFit = maxfit;
  }

  selection() {
    let newRockets = [];
    for(let i=0; i<this.rockets.length; i++) {
      let parentA = random(this.matingpool).dna;
      let parentB = random(this.matingpool).dna;
      let child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
    generationCount++;
  }

  run() {
    for(let i=0; i<this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}