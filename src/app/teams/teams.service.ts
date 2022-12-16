import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  api_url : string = 'http://localhost:3000/all'

  constructor(private http:HttpClient) { }

  getAllPlayers(){
    return this.http.get(this.api_url)
  }
}
