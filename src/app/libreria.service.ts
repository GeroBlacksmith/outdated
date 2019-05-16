import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class LibreriaService {
    constructor(private http:HttpClient){}
    get(){
        return this.http.get('assets/data.json');
    }
}