import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
    private apiRoot = 'https://api-mercado-django.herokuapp.com/';
    resultado: any;

    constructor(private http:HttpClient){}

    getLote() {
        this.resultado = this.http.get(this.apiRoot.concat('lote/'))
        console.log(this.resultado);
    }
}

