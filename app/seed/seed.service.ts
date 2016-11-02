import { Injectable } from '@angular/core';

const INITIAL = 0987654321;

@Injectable()
export class SeedService {

  private _history: number[] = [];

  public get history(): number[] {
    return this._history;
  }

  public set history(v: number[]) {
    throw new Error("History cannot be set");
  }

  private _seed: number;

  public get seed(): number {
    let hash = SeedService.hash(this._seed);
    this._history.push(hash);
    this._seed = hash;
    return this._seed;
  }

  public set seed(v: number) {
    if (v < 1) {
      throw new Error("Seed value must be at least 10.");
    } else if (parseInt(v.toString().charAt(v.toString().length - 1)) === 0) {
      throw new Error("Seed value cannot end with a 0.");
    } else if (this._seed !== INITIAL) {
      throw new Error("Seed can only be set once.");
    } else {
      this._seed = v;
    }
  }

  constructor() {
    this._seed = INITIAL;
  }

  static hash = (input: number): number => {

    let str = input.toString();
    let hash = 0;

    for (var i = str.length - 1; i >= 0; i--) {
      let chr = parseInt(str.charAt(i));
      hash = ((hash << 5) - hash) + chr;
      hash |= 0;
    }

    hash = Math.abs(hash);

    return hash;
  }
}