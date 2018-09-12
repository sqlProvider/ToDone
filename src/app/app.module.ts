//#region Global Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//#region Global Imports

//#region Local Imports
import { AppRoutingModule } from '@App/Route/Routing.Module';
//#region Local Imports

//#region Component Imports
import { ToDoneComponent } from '@App/Components/ToDone/ToDone.Component';
import { RootComponent } from '@App/Layout/Root/Root.Component';
//#region Component Imports

//#region Store Imports
import { ToDoneStore } from '@App/app.module.reducer';
import { ToolBoxComponent } from '@App/Components/ToolBox/ToolBox.Component';
//#region Store Imports

@NgModule({
	bootstrap: [RootComponent],
	declarations: [
		/**
		 * Layout Declarations
		 */
		RootComponent,

		/**
		 * Component Declarations
		 */
		ToDoneComponent,
		ToolBoxComponent
	],
	imports: [
		/**
		 * Global Modules
		 */
		BrowserModule,
		StoreModule.forRoot(ToDoneStore.REDUCER_TOKEN),
		EffectsModule.forRoot([ ]),

		/**
		 * Local Modules
		 */
		AppRoutingModule
	],
	providers: [
		ToDoneStore.ReducerProvider
	]
})
export class AppModule { }
