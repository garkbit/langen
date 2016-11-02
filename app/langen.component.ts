import { Component } from '@angular/core';

// app
import { SeedService } from './seed/seed.service';

@Component({
  moduleId: module.id,
  selector: 'langen',
  templateUrl: 'langen.html'
})
export class LangenComponent {

  private iterator: NodeJS.Timer;
  private timeLimit = 60 * 1000;
  private iterationLimit = 100000;
  private iterationCount = 0;
  private startTime: number;
  private elapsed: number[] = [];

  constructor(
    private ss: SeedService
  ) {
    this.startTime = Date.now();
    this.iterator = setInterval(this.stress, 5);
  }

  private stress = () => {
    let elapsed = Date.now() - this.startTime;
    let timeUp = elapsed >= this.timeLimit;

    if (timeUp) this.stop();
    if (this.iterationCount >= this.iterationLimit) this.stop();

    let start = Date.now();
    this.ss.seed;
    this.elapsed.push(Date.now() - start);

    this.iterationCount++;
  }

  private stop = () => {
    console.info("I've run %s times in %s seconds.", this.iterationCount, Date.now() - this.startTime);
    clearInterval(this.iterator);
    console.info(this.ss.history);
    console.info("Max: ", Math.max(...this.ss.history));
    console.info("Min: ", Math.min(...this.ss.history));
  }

}