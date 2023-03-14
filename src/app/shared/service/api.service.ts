import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_URL: string = "https://pokebuildapi.fr/api/v1";

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/pokemon');
  }
}
