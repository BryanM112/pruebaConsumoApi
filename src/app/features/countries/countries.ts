import { Component, inject } from '@angular/core';
import { CountriesServices } from '../services/countries.services';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
  private countriesService = inject(CountriesServices);
  countriesResource = rxResource({
    stream:() => this.countriesService.getCountries('name','capital','flags'),
  });
}
