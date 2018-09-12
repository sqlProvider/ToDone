//#region Global Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//#region Global Imports

//#region Local Imports
import { Routes } from '@App/Route/Routes';
//#region Local Imports

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(Routes)]
})
export class AppRoutingModule { }
