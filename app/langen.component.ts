import {Component} from '@angular/core';

// app
import {SeedService} from './seed/seed.service';

@Component({
	moduleId: module.id,
	selector: 'langen',
	templateUrl: 'langen.html'
})
export class LangenComponent {
	constructor(
		private seedService: SeedService
	) {
		for (var i = 10 - 1; i >= 0; i--) {
			console.info('langen.component.ts: seedService.get(): %s', seedService.get());
		}
	}
}