import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MoviesService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){  
        this.url = "https://swapi.py4e.com/api/";
      }

    getMovies(){
        return this._http.get(this.url + "films/");
    }
}