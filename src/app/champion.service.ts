import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from './champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private baseURL="http://localhost:8082/api/champions";

  constructor(private httpClient:HttpClient) { }

  getListOfChampions():Observable<Champion[]>{
    return this.httpClient.get<Champion[]>(`${this.baseURL}`);

  }

  addAChampion(champion:Champion):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, champion)
  }

  deleteChampion(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getChampionById(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/${id}`)
  }

}
