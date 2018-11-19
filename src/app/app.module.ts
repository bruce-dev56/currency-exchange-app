import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HistoryComponent } from './history/history.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
} from '@angular/material';
import { NomicsApiRequestService } from './shared/service/nomics-api-request.service';
import { CurrencyExchangeService } from './shared/service/currency-exchange.service';

@NgModule({
    declarations: [
        AppComponent,
        ConverterComponent,
        HistoryComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AuthModule,
        CoreModule,
        AppRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatAutocompleteModule,
    ],
    providers: [
        NomicsApiRequestService,
        CurrencyExchangeService,
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
