import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


import { HttpClientModule } from "@angular/common/http";
import {  baseURL } from "./shared/baseurl";
import { DishService } from "./services/dish.service";
import { MenuComponent } from './menu/menu.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        MenuComponent
    ],
    providers: [
        {provide: 'baseURL', useValue: baseURL},
        DishService,
        ProcessHTTPMsgService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
