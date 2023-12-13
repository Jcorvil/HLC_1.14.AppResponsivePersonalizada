import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: any;
  filtro: string = "";
  filtroAnimales: any;
  tipoFiltro: string = "nombreComun";

  constructor(private httpClient: HttpClient) {
    this.animals = this.httpClient.get('https://raw.githubusercontent.com/Jcorvil/HLC_1.14.AppResponsivePersonalizada/master/arrayanimales/animals.json');


    this.filtroAnimales = this.animals;
  }

  cumpleFiltro(animal: any): boolean {
    if (!this.filtro) return true;
    
    const filtroLower = this.filtro.toLowerCase();

    switch (this.tipoFiltro) {
      case 'nombreComun':
        return animal?.name?.common.toLowerCase().startsWith(filtroLower);
      case 'nombreCientifico':
        return animal?.name?.scientific.toLowerCase().startsWith(filtroLower);
      case 'pais':
        return animal?.country.toLowerCase().startsWith(filtroLower);
      default:
        return true;
    }
  }

}
