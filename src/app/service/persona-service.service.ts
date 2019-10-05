import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../model/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  endPoint = 'https://private-dc6e2a-automoviles.apiary-mock.com/personas';

  constructor(private client: HttpClient) { }

  listarEmpleados(): Observable<Persona[]> {
    return this.client.get<Persona[]>(this.endPoint);
  }


}
