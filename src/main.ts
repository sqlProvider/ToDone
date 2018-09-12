//#region Global Imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//#region Global Imports

//#region Local Imports
import { AppModule } from '@App/app.module';
import { environment } from '@Source/environments/environment';
//#region Local Imports

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.log(err));
