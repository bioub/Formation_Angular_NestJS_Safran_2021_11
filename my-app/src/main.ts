import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// désactive Zone.js (on devra lancer la detection manuellement à chaque fois)
// platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
