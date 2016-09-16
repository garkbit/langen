import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// app
import {LangenComponent} from './langen.component';
import {SeedService} from './seed/seed.service';

@NgModule({
	imports: [BrowserModule],
	declarations: [LangenComponent],
	bootstrap: [LangenComponent],
	providers: [SeedService]
})
export class LangenModule {

}