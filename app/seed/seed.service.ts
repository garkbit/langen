import {Injectable} from '@angular/core';

export const INITIAL = 1234567890;

@Injectable()
export class SeedService {
	private val:number;
	private history:number[] = [];

	constructor() {
		this.val = SeedService.hash(INITIAL);
	}

	public get = () => {
		this.history.push(this.val);
		this.val = SeedService.hash(this.val);
		return this.val;
	}

	public set = (val:number = INITIAL) => {
		this.history.push(this.val);
		this.val = SeedService.hash(val);
	}

	static hash = (input:number = INITIAL):number => {

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