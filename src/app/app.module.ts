//#region Global Imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
//#region Global Imports

//#region Local Imports
//#region Local Imports

//#region Component Imports
import { InputBoxComponent } from '@App/Components/InputBox/InputBox.Component';
import { ListComponent } from '@App/Components/List/List.Component';
import { ListItemComponent } from '@App/Components/ListItem/ListItem.Component';
import { ToDoneComponent } from '@App/Components/ToDone/ToDone.Component';
import { RootComponent } from '@App/Layout/Root/Root.Component';
//#region Component Imports

//#region Store Imports
import { ToDoneStore } from '@App/app.module.reducer';
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
		InputBoxComponent,
		ListComponent,
		ListItemComponent
	],
	imports: [
		/**
		 * Global Modules
		 */
		BrowserModule,
		HttpClientModule,
		FormsModule,
		StoreModule.forRoot(ToDoneStore.REDUCER_TOKEN),
		EffectsModule.forRoot([ ]),

		/**
		 * Local Modules
		 */
	],
	providers: [
		ToDoneStore.ReducerProvider
	]
})
export class AppModule { }
