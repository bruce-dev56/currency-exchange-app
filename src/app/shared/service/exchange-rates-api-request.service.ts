import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.prod';
import { ExchangeRatesResponse } from '../interface/exchange-rates.model';

@Injectable()
export class ExchangeRatesApiRequestService {
    constructor(public http: HttpClient) {}

    public getExchangeRates(): Observable<ExchangeRatesResponse> {
        return this.http.get<ExchangeRatesResponse>(
            `${environment.exchangeRatesAPIUrl}/v1/latest?access_key=${environment.accessKey}`,
        );
    }
}
