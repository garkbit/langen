import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {LangenModule} from './langen.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(LangenModule);