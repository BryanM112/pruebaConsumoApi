import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { countries, name, flags} from "../models/countries.interface"
import { Countries } from "../countries/countries";
import { Observable, catchError, tap, throwError } from 'rxjs';
import { rxResource } from "@angular/core/rxjs-interop";

@Injectable ({providedIn:'root'})
export class CountriesServices{
    private http = inject(HttpClient);
    getCountries(name: String = 'name', capital: String = 'capital', flags: String = 'flags'): Observable<countries>{
        return this.http
        .get<countries>(`https://restcountries.com/v3.1/all?fields=${name},${capital},${flags}`)
        .pipe(
            tap((response) => {
                console.log('Response de APi countries', response)
            }),
            catchError(err =>
                throwError(() => new Error('No se pudo cargar los países'))
            )
        );
        
    }

    
}