import { Component, ViewChild, ElementRef } from '@angular/core';

// app
import { SeedService } from './seed/seed.service';

const MAXINT = 2147483647;

@Component({
  moduleId: module.id,
  selector: 'langen',
  templateUrl: 'langen.html'
})
export class LangenComponent {

  @ViewChild("canvas") canvas: ElementRef;

  private context: CanvasRenderingContext2D;

  private iterator: NodeJS.Timer;
  private timeLimit = 120 * 1000;
  private iterationLimit = 100000;
  private iterationCount = 0;
  private startTime: number;
  private elapsed: number;
  private cols: Column[] = [];

  constructor(
    private ss: SeedService
  ) {
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext("2d");
    this.context.fillStyle = "white";

    this.startTime = Date.now();
    this.iterator = setInterval(this.stress, 1);
  }

  private stress = () => {
    let elapsed = Date.now() - this.startTime;
    let timeUp = elapsed >= this.timeLimit;

    if (timeUp) this.stop();
    if (this.iterationCount >= this.iterationLimit) this.stop();

    this.ss.seed;

    this.elapsed = Date.now() - this.startTime;

    this.iterationCount++;
  }

  private stop = () => {
    console.info("I've run %s times in %s seconds.", this.iterationCount, (Date.now() - this.startTime) / 1000);
    clearInterval(this.iterator);
    console.info("Max: ", Math.max(...this.ss.history));
    console.info("Min: ", Math.min(...this.ss.history));
    this.chart()
  }

  private chart = () => {

    for (var i = this.iterationCount - 1; i >= 0; i--) {
      this.cols.push({
        height: 0
      });
    }

    this.ss.history.forEach(n => {
      let col = Math.round(n / (MAXINT / 1000));
      this.cols[col].height++;
    });

    let vScale = 700 / Math.max(...this.cols.map(c => c.height));
    console.info('langen.component.ts: vScale: %s', vScale);

    this.cols.forEach((col, i) => {
      this.context.fillRect(i + 1, 700 - Math.round(col.height * vScale), 1, Math.round(col.height * vScale));
    })

    console.info('langen.component.ts: this.cols: %O', this.cols);
  }

}

interface Column {
  height: number
}