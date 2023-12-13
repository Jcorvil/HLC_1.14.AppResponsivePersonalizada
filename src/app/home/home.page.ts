import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: any;
  filtro: string = "";

  constructor(private httpClient:HttpClient) {

    this.animals = this.httpClient.get('https://raw.githubusercontent.com/Jcorvil/HLC_1.14.AppResponsivePersonalizada/master/arrayanimales/animals.json');

  }

}
